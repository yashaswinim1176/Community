/* =========================================================
   SEMINARS DATA
   Add a new seminar by adding a new object to this array.
   ========================================================= */

const seminars = [
  {
    id: "seminar-001",
    title: "Careers in Machine Learning: An Industry Perspective",
    category: "Seminar",
    description: "A talk and Q&A with practicing ML engineers on breaking into the field and what the job really looks like.",
    longDescription:
      "Two ML engineers from industry share how they broke into the field, what a typical week looks like, and answer open questions from students about interviews, portfolios and further study.",
    date: "2026-09-20",
    time: "5:00 PM - 6:30 PM",
    venue: "Seminar Hall 1",
    image: "images/seminars/seminars-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "All students",
    rules: ["Open seating, no registration fee.", "Questions can be submitted in advance via the registration form."],
    schedule: [
      { time: "5:00 PM", activity: "Introduction and speaker backgrounds" },
      { time: "5:15 PM", activity: "Talk: breaking into ML roles" },
      { time: "5:50 PM", activity: "Open Q&A" }
    ],
    faq: [{ q: "Is this only for final year students?", a: "No, it's open to students at any stage." }]
  }
];
