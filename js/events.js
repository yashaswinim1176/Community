/* =========================================================
   GENERAL EVENTS DATA
   Use this file for community activities that are not a
   hackathon, workshop, competition or seminar.
   ========================================================= */

const events = [
  {
    id: "event-001",
    title: "Open Source Contribution Day",
    category: "Event",
    description: "A guided day to make your first open-source contribution alongside experienced mentors.",
    longDescription:
      "Bring a laptop and pick from a curated list of beginner-friendly open-source issues. Mentors help you set up the project, understand the codebase and submit your first pull request.",
    date: "2026-10-10",
    time: "11:00 AM - 3:00 PM",
    venue: "Innovation Hall",
    image: "images/events/events-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "All students",
    rules: ["Bring a laptop with git installed.", "A GitHub account is required."],
    schedule: [
      { time: "11:00 AM", activity: "Setup and project selection" },
      { time: "11:30 AM", activity: "Mentored contribution time" },
      { time: "2:30 PM", activity: "Show and tell" }
    ],
    faq: [{ q: "Do I need prior open-source experience?", a: "No, this event is designed for first-time contributors." }]
  },
  {
    id: "event-002",
    title: "Community Project Demo Night",
    category: "Event",
    description: "Members showcase personal and team projects built over the semester to the whole community.",
    longDescription:
      "An informal evening where community members set up demo stations to show off what they've built, get feedback, and find collaborators for future projects.",
    date: "2026-11-21",
    time: "6:00 PM - 8:00 PM",
    venue: "Community Hub",
    image: "images/events/events-2.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual or Team",
    eligibility: "All community members",
    rules: ["Sign up a demo slot in advance.", "Bring your own laptop or hardware for the demo."],
    schedule: [
      { time: "6:00 PM", activity: "Doors open, setup" },
      { time: "6:30 PM", activity: "Demo stations open to attendees" },
      { time: "7:45 PM", activity: "Community shout-outs" }
    ],
    faq: [{ q: "Can I demo a work-in-progress project?", a: "Yes, work-in-progress projects are welcome." }]
  },
  {
    id: "event-003",
    title: "Freshers' Orientation & Tech Talk",
    category: "Event",
    description: "An introduction to the community for first-year students, with a short talk on getting started in tech.",
    longDescription:
      "A welcome session for incoming students covering what the community does, how to get involved, and a short talk on building good habits early in a tech-focused degree.",
    date: "2026-08-05",
    time: "10:00 AM - 12:00 PM",
    venue: "Main Auditorium",
    image: "images/events/events-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "Individual",
    eligibility: "First year students",
    rules: ["Open to all incoming first-year students."],
    schedule: [
      { time: "10:00 AM", activity: "Welcome and community overview" },
      { time: "10:30 AM", activity: "Tech talk: getting started well" },
      { time: "11:15 AM", activity: "Open mixer" }
    ],
    faq: [{ q: "Is this only for CS branches?", a: "No, it's open to all first-year engineering students." }],
    result: "Over 200 first-year students attended and 140 signed up for community membership on the spot."
  }
];
