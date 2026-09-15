/* =========================================================
   MAIN SITE LOGIC
   This file reads event data from hackathons.js, workshops.js,
   competitions.js, seminars.js and events.js (loaded before this
   file in index.html) and renders the whole homepage dynamically.

   Do NOT add event data here. Add it to the relevant data file.
   ========================================================= */

/* ---------- Combine all event data into one working list ---------- */
// Each data file defines a top-level const array (hackathons, workshops,
// competitions, seminars, events). We combine them here with a shared
// "type" key used for filtering, then store the master list globally so
// the event-details page can reuse the same data.
const ALL_EVENTS = [
  ...hackathons.map((e) => ({ ...e, type: "hackathon" })),
  ...workshops.map((e) => ({ ...e, type: "workshop" })),
  ...competitions.map((e) => ({ ...e, type: "competition" })),
  ...seminars.map((e) => ({ ...e, type: "seminar" })),
  ...events.map((e) => ({ ...e, type: "event" }))
];

// Expose the combined list for the event-details page.
window.COMMUNITY_EVENTS = ALL_EVENTS;

/* ---------- Small reusable icon set (inline SVG strings) ---------- */
const ICONS = {
  calendar:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  clock:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  pin:
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  search:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  check:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  tool: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4L14 12l-2-2Z"/></svg>',
  trophy:
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a1 1 0 0 0-1 1 5 5 0 0 0 4 5M17 5h3a1 1 0 0 1 1 1 5 5 0 0 1-4 5"/></svg>',
  mic: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 19v3"/></svg>',
  spark:
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>'
};

/* ---------- Utility helpers ---------- */

// Format an ISO date string ("2026-10-15") into "Oct 15, 2026".
function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// Map internal type -> human label used on badges and chips.
const TYPE_LABELS = {
  hackathon: "Hackathon",
  workshop: "Workshop",
  competition: "Competition",
  seminar: "Seminar",
  event: "Event"
};

function typeLabel(type) {
  return TYPE_LABELS[type] || type;
}

// Build the meta row markup shared by event cards.
function metaRow(icon, text) {
  return `<div class="meta-row">${ICONS[icon]}<span>${text}</span></div>`;
}

// Returns a short countdown string for a future date, or null if not upcoming.
function countdownText(isoDate) {
  const target = new Date(isoDate + "T00:00:00").getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Happening today";
  if (days === 1) return "Starts tomorrow";
  return `Starts in ${days} days`;
}

/* ---------- Event card rendering ---------- */

function buildEventCard(ev) {
  const statusLabel = ev.status === "upcoming" ? "Upcoming" : ev.status === "ongoing" ? "Ongoing" : "Completed";
  const countdown = ev.status === "upcoming" ? countdownText(ev.date) : null;

  return `
    <article class="event-card reveal" data-type="${ev.type}" data-status="${ev.status}">
      <div class="event-thumb">
        <img src="${ev.image}" alt="${ev.title}" loading="lazy" />
        <span class="badge status-${ev.status}">${statusLabel}</span>
        <span class="badge category-badge">${typeLabel(ev.type)}</span>
      </div>
      <div class="event-body">
        <h3>${ev.title}</h3>
        <p class="event-desc">${ev.description}</p>
        <div class="event-meta">
          ${metaRow("calendar", formatDate(ev.date))}
          ${metaRow("clock", ev.time)}
          ${metaRow("pin", ev.venue)}
        </div>
        ${countdown ? `<div class="countdown">${countdown}</div>` : ""}
        <div class="event-actions">
          <a class="btn btn-secondary btn-sm view-details-btn" href="pages/event-details.html?id=${ev.id}">View Details</a>
          <button class="btn btn-primary btn-sm register-btn" data-id="${ev.id}" data-title="${ev.title}" ${
    ev.status === "completed" ? "disabled" : ""
  }>
            ${ev.status === "completed" ? "Closed" : "Register"}
          </button>
        </div>
      </div>
    </article>`;
}

function buildPastEventCard(ev) {
  return `
    <article class="event-card reveal">
      <div class="event-thumb">
        <img src="${ev.image}" alt="${ev.title}" loading="lazy" />
        <span class="badge status-completed">Completed</span>
        <span class="badge category-badge">${typeLabel(ev.type)}</span>
      </div>
      <div class="event-body">
        <h3>${ev.title}</h3>
        <p class="event-desc">${ev.result || ev.description}</p>
        <div class="event-meta">
          ${metaRow("calendar", formatDate(ev.date))}
        </div>
        <div class="event-actions">
          <a class="btn btn-secondary btn-block btn-sm" href="pages/event-details.html?id=${ev.id}">View Event</a>
        </div>
      </div>
    </article>`;
}

/* ---------- State ---------- */
const state = {
  search: "",
  filter: "all" // all | hackathon | workshop | competition | seminar | event | upcoming | completed
};

/* ---------- Filtering logic ---------- */
function matchesFilter(ev) {
  if (state.filter === "all") return true;
  if (state.filter === "upcoming") return ev.status === "upcoming" || ev.status === "ongoing";
  if (state.filter === "completed") return ev.status === "completed";
  return ev.type === state.filter;
}

function matchesSearch(ev) {
  if (!state.search) return true;
  const q = state.search.toLowerCase();
  return (
    ev.title.toLowerCase().includes(q) ||
    ev.description.toLowerCase().includes(q) ||
    typeLabel(ev.type).toLowerCase().includes(q) ||
    (ev.eligibility || "").toLowerCase().includes(q)
  );
}

function renderEvents() {
  const grid = document.getElementById("eventGrid");
  if (!grid) return;

  const upcomingOnly = ALL_EVENTS
    .filter((ev) => ev.status !== "completed")
    .filter(matchesFilter)
    .filter(matchesSearch)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (upcomingOnly.length === 0) {
    grid.innerHTML = `<p class="empty-state">No events match your search or filter right now. Try a different keyword or category.</p>`;
    return;
  }

  grid.innerHTML = upcomingOnly.map(buildEventCard).join("");
  observeReveal();
  attachRegisterHandlers();
}

function renderPastEvents() {
  const grid = document.getElementById("pastEventGrid");
  if (!grid) return;

  const past = ALL_EVENTS.filter((ev) => ev.status === "completed").sort((a, b) => new Date(b.date) - new Date(a.date));

  grid.innerHTML = past.map(buildPastEventCard).join("");
  observeReveal();
}

/* ---------- Category cards (counts derived from data) ---------- */
function renderCategoryCards() {
  const wrap = document.getElementById("categoryGrid");
  if (!wrap) return;

  const categories = [
    { type: "hackathon", label: "Hackathons", icon: "code", desc: "Build fast, ship working prototypes." },
    { type: "workshop", label: "Workshops", icon: "tool", desc: "Hands-on sessions to learn a new skill." },
    { type: "competition", label: "Competitions", icon: "trophy", desc: "Test your skills and win recognition." },
    { type: "seminar", label: "Seminars", icon: "mic", desc: "Talks and panels from mentors and alumni." },
    { type: "event", label: "Events", icon: "spark", desc: "Community meetups and activities." }
  ];

  wrap.innerHTML = categories
    .map((cat) => {
      const count = ALL_EVENTS.filter((ev) => ev.type === cat.type).length;
      return `
        <button class="category-card reveal" data-type="${cat.type}" aria-label="View ${cat.label}">
          <span class="category-icon">${ICONS[cat.icon]}</span>
          <h3>${cat.label}</h3>
          <p>${cat.desc}</p>
          <span class="category-count">${count} event${count === 1 ? "" : "s"}</span>
        </button>`;
    })
    .join("");

  wrap.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      setActiveFilter(card.dataset.type);
      document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  observeReveal();
}

/* ---------- Filter chips & search wiring ---------- */
function setActiveFilter(filterValue) {
  state.filter = filterValue;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filterValue);
  });
  renderEvents();
}

function initControls() {
  const searchInput = document.getElementById("eventSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value.trim();
      renderEvents();
    });
  }

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setActiveFilter(chip.dataset.filter));
  });
}

/* ---------- Register button + toast ---------- */
function attachRegisterHandlers() {
  document.querySelectorAll(".register-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      showToast(`You're on the list for "${btn.dataset.title}". Check your inbox for confirmation.`);
    });
  });
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
}

/* ---------- Mobile navigation ---------- */
function initNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Animated stat counters ---------- */
function animateCounter(el, target, duration = 1400) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initStats() {
  const statEls = document.querySelectorAll(".stat-value");
  if (!statEls.length) return;

  let animated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statEls.forEach((el) => animateCounter(el, Number(el.dataset.target)));
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(statEls[0]);
}

/* ---------- Reveal-on-scroll ---------- */
let revealObserver = null;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

/* ---------- Hero terminal typing effect ---------- */
function initHeroTerminal() {
  const el = document.getElementById("heroTypedValue");
  if (!el) return;

  const words = ["AI Innovation Hackathon", "Docker Fundamentals", "Coding Championship", "Open Source Day"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = words[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }

  tick();
}

/* ---------- Active nav link on scroll ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a");
  if (!sections.length || !links.length) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => spy.observe(section));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());

  renderCategoryCards();
  renderEvents();
  renderPastEvents();
  initControls();
  initNav();
  initStats();
  initHeroTerminal();
  initScrollSpy();
  observeReveal();
});
