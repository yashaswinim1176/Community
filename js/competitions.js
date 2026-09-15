/* =========================================================
   COMPETITIONS DATA
   Add a new competition by adding a new object to this array.
   ========================================================= */

const competitions = [
  {
    id: "competition-001",
    title: "Algorithmic Coding Championship",
    category: "Competition",
    description: "A timed competitive programming contest across three difficulty divisions.",
    longDescription:
      "Solve a set of algorithmic problems under time pressure across beginner, intermediate and advanced divisions, with live leaderboards throughout the contest.",
    date: "2026-10-03",
    time: "4:00 PM - 7:00 PM",
    venue: "Online (Community Judge Platform)",
    image: "images/competitions/competitions-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "All engineering students",
    rules: [
      "Contest runs on the community's online judge platform.",
      "Any programming language supported by the judge is allowed.",
      "Plagiarism checks are run on all submissions."
    ],
    schedule: [
      { time: "4:00 PM", activity: "Contest opens" },
      { time: "6:45 PM", activity: "Contest closes" },
      { time: "7:00 PM", activity: "Leaderboard finalized" }
    ],
    faq: [{ q: "Can I use an IDE?", a: "Yes, any local IDE is fine as long as you submit through the judge." }]
  },
  {
    id: "competition-002",
    title: "UI/UX Design Sprint",
    category: "Competition",
    description: "A rapid design competition to reimagine a real campus app experience in one afternoon.",
    longDescription:
      "Teams are given a real problem statement from a campus service and have four hours to research, wireframe and prototype a redesigned experience, presented to a panel of design mentors.",
    date: "2026-11-14",
    time: "11:00 AM - 4:00 PM",
    venue: "Design Studio, Block A",
    image: "images/competitions/competitions-2.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "1-2 Members",
    eligibility: "All students",
    rules: [
      "Teams of up to 2 members.",
      "Any prototyping tool is allowed.",
      "Final prototype must be clickable, not static images only."
    ],
    schedule: [
      { time: "11:00 AM", activity: "Problem statement briefing" },
      { time: "12:00 PM", activity: "Research and wireframing" },
      { time: "2:00 PM", activity: "Prototyping" },
      { time: "3:30 PM", activity: "Presentations to judges" }
    ],
    faq: [{ q: "Do I need design experience?", a: "No prior experience required, mentors are available throughout." }]
  },
  {
    id: "competition-003",
    title: "TechQuiz: The Annual Tech Trivia",
    category: "Competition",
    description: "A fast-paced buzzer-round quiz covering programming, hardware, internet history and pop tech.",
    longDescription:
      "A team quiz competition with written rounds, rapid-fire buzzer rounds, and a visual identification round, open to all branches.",
    date: "2026-08-22",
    time: "5:00 PM - 7:00 PM",
    venue: "Main Auditorium",
    image: "images/competitions/competitions-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "2-3 Members",
    eligibility: "All students",
    rules: ["Teams of 2 to 3 members.", "No phones or internet access during rounds."],
    schedule: [
      { time: "5:00 PM", activity: "Written prelim round" },
      { time: "5:45 PM", activity: "Finalist teams announced" },
      { time: "6:00 PM", activity: "Buzzer finals" },
      { time: "6:50 PM", activity: "Prize distribution" }
    ],
    faq: [{ q: "How many teams qualify for finals?", a: "The top 6 teams from the prelim round advanced." }],
    result: "Team 'Segfault' won the finals after a tie-breaker round, edging out 'Null Pointer' by one point."
  }
];
