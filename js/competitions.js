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
  }
];