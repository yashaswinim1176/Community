/* =========================================================
   EVENT DETAILS PAGE LOGIC
   Reads ?id=<event-id> from the URL and renders that event's
   full information using the combined ALL_EVENTS array defined
   inline in event-details.html.
   ========================================================= */

const TYPE_LABELS_DETAILS = {
  hackathon: "Hackathon",
  workshop: "Workshop",
  competition: "Competition",
  seminar: "Seminar",
  event: "Event"
};

const ICONS_DETAILS = {
  calendar:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  clock:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  pin:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  users:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  badge:
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M9 13.5 7 22l5-3 5 3-2-8.5"/></svg>'
};

function getEventIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function formatDateDetails(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function sidebarRow(icon, label, value) {
  return `
    <div class="sidebar-row">
      ${ICONS_DETAILS[icon]}
      <span>
        <strong>${label}</strong>
        <span class="val">${value}</span>
      </span>
    </div>`;
}

function renderNotFound(container) {
  container.innerHTML = `
    <div class="not-found">
      <h1>Event not found</h1>
      <p>We couldn't find an event with that ID. It may have been removed or the link is incorrect.</p>
      <a class="btn btn-primary" href="../index.html#events">Back to all events</a>
    </div>`;
}

function renderEventDetails(ev) {
  const container = document.getElementById("detailsContainer");
  const statusLabel = ev.status === "upcoming" ? "Upcoming" : ev.status === "ongoing" ? "Ongoing" : "Completed";

  const rulesHtml = (ev.rules || []).map((r) => `<li>${r}</li>`).join("");
  const scheduleHtml = (ev.schedule || [])
    .map(
      (s) => `
      <div class="schedule-item">
        <span class="schedule-time">${s.time}</span>
        ${s.activity}
      </div>`
    )
    .join("");
  const faqHtml = (ev.faq || [])
    .map(
      (f) => `
      <details class="faq-item">
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
    )
    .join("");

  container.innerHTML = `
    <p class="breadcrumb"><a href="../index.html#events">Events</a> / ${TYPE_LABELS_DETAILS[ev.type] || ev.type} / ${ev.title}</p>

    <div class="details-hero">
      <img src="../${ev.image}" alt="${ev.title}" />
      <div class="details-hero-overlay">
        <div>
          <span class="badge status-${ev.status}" style="position:static; display:inline-block; margin-bottom:0.6rem;">${statusLabel}</span>
          <h1>${ev.title}</h1>
        </div>
      </div>
    </div>

    <div class="details-layout">
      <div>
        <div class="details-block">
          <h2>About this event</h2>
          <p>${ev.longDescription || ev.description}</p>
        </div>

        ${
          ev.result
            ? `<div class="details-block">
                <h2>Result</h2>
                <p>${ev.result}</p>
              </div>`
            : ""
        }

        ${
          rulesHtml
            ? `<div class="details-block">
                <h2>Rules</h2>
                <ul class="rules-list">${rulesHtml}</ul>
              </div>`
            : ""
        }

        ${
          scheduleHtml
            ? `<div class="details-block">
                <h2>Schedule</h2>
                <div class="schedule-list">${scheduleHtml}</div>
              </div>`
            : ""
        }

        ${
          faqHtml
            ? `<div class="details-block">
                <h2>Frequently asked questions</h2>
                <div class="faq-list">${faqHtml}</div>
              </div>`
            : ""
        }
      </div>

      <aside class="sidebar-card">
        ${sidebarRow("calendar", "Date", formatDateDetails(ev.date))}
        ${sidebarRow("clock", "Time", ev.time)}
        ${sidebarRow("pin", "Venue", ev.venue)}
        ${sidebarRow("users", "Team size", ev.teamSize || "Individual")}
        ${sidebarRow("badge", "Eligibility", ev.eligibility || "All students")}
        <button class="btn btn-primary btn-block" id="detailsRegisterBtn" ${ev.status === "completed" ? "disabled" : ""}>
          ${ev.status === "completed" ? "Registration closed" : "Register for this event"}
        </button>
      </aside>
    </div>
  `;

  const registerBtn = document.getElementById("detailsRegisterBtn");
  if (registerBtn && !registerBtn.disabled) {
    registerBtn.addEventListener("click", () => {
      showToastDetails(`You're on the list for "${ev.title}". Check your inbox for confirmation.`);
    });
  }

  document.title = `${ev.title} — NEXUS`;
}

let toastTimerDetails = null;
function showToastDetails(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimerDetails);
  toastTimerDetails = setTimeout(() => toast.classList.remove("show"), 3800);
}

function initNavDetails() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year") && (document.getElementById("year").textContent = new Date().getFullYear());
  initNavDetails();

  const id = getEventIdFromUrl();
  const container = document.getElementById("detailsContainer");
  const event = ALL_EVENTS.find((ev) => ev.id === id);

  if (!id || !event) {
    renderNotFound(container);
    return;
  }

  renderEventDetails(event);
});
