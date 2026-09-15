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
  },
  {
    id: "seminar-002",
    title: "Understanding Modern Web Security",
    category: "Seminar",
    description: "An accessible walkthrough of common web vulnerabilities and how real applications defend against them.",
    longDescription:
      "This seminar covers the most common web vulnerabilities seen in real applications, how they're exploited at a conceptual level, and the defensive patterns that prevent them.",
    date: "2026-08-15",
    time: "4:00 PM - 5:15 PM",
    venue: "Seminar Hall 2",
    image: "images/seminars/seminars-2.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "Individual",
    eligibility: "All students",
    rules: ["Open to all, no prior security knowledge required."],
    schedule: [
      { time: "4:00 PM", activity: "Common vulnerability classes" },
      { time: "4:35 PM", activity: "Live demonstration in a sandboxed environment" },
      { time: "5:00 PM", activity: "Q&A" }
    ],
    faq: [{ q: "Was the recording shared?", a: "Yes, the recording was shared with all registered attendees." }],
    result: "Attended by over 90 students; follow-up resources were shared in the community's cybersecurity channel."
  },
  {
    id: "seminar-003",
    title: "Research Paths After Engineering",
    category: "Seminar",
    description: "Faculty and alumni discuss pursuing research, from undergraduate projects to graduate study.",
    longDescription:
      "A panel of faculty members and alumni currently in graduate programs discuss how to get started with undergraduate research, choosing a research area, and applying to graduate school.",
    date: "2026-12-02",
    time: "3:30 PM - 5:00 PM",
    venue: "Conference Room, Block B",
    image: "images/seminars/seminars-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "Third year and above",
    rules: ["Open seating.", "A short feedback form is requested at the end."],
    schedule: [
      { time: "3:30 PM", activity: "Panel introductions" },
      { time: "3:45 PM", activity: "Panel discussion" },
      { time: "4:30 PM", activity: "Audience Q&A" }
    ],
    faq: [{ q: "Can first and second years attend?", a: "Yes, though the content is most relevant to third year and above." }]
  }
];
