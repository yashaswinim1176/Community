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
  } ];