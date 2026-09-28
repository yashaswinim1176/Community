/* =========================================================
   GENERAL EVENTS DATA
   Use this file for community activities that are not a
   hackathon, workshop, competition or seminar.
   ========================================================= */

const events = [
  {
    id: "event-1",
    title: "Open Source Contribution Day",
    category: "Event",
    description: "A guided day to make your first open-source contribution alongside experienced mentors.",
    longDescription:
      "Bring a laptop and pick from a curated list of beginner-friendly open-source issues. Mentors help you set up the project, understand the codebase and submit your first pull request.",
    date: "26-09-2026",
    time: "9:30 AM - 11:00 PM",
    venue: "Seminar Hall - 1",
    image: "images/events/events-1.svg",
    registrationLink: "#register",
    status: "Completed",
    teamSize: "Individual",
    eligibility: "All students",
    rules: [ ],
    schedule: [
      { time: "11:00 AM", activity: "Setup and project selection" },
      { time: "11:30 AM", activity: "Mentored contribution time" },
      { time: "2:30 PM", activity: "Show and tell" }
    ],
    faq: [{ q: "Do I need prior open-source experience?", a: "No, this event is designed for first-time contributors." }]
  } , 

  {
    id: "event-2",
    title: "Open Source Contribution Day",
    category: "Event",
    description: "A guided day to make your first open-source contribution alongside experienced mentors.",
    longDescription:
      "Bring a laptop and pick from a curated list of beginner-friendly open-source issues. Mentors help you set up the project, understand the codebase and submit your first pull request.",
    date: "26-09-2026",
    time: "11:30 AM - 1:30 PM",
    venue: "Seminar Hall - 1",
    image: "images/events/events-1.svg",
    registrationLink: "#register",
    status: "Completed",
    teamSize: "Individual",
    eligibility: "All students",
    rules: [ ],
    schedule: [
      { time: "11:00 AM", activity: "Setup and project selection" },
      { time: "11:30 AM", activity: "Mentored contribution time" },
      { time: "2:30 PM", activity: "Show and tell" }
    ],
    faq: [{ q: "Do I need prior open-source experience?", a: "No, this event is designed for first-time contributors." }]
  } ,

  {
  id: "event-3",
  title: "Google AI Studio Workshop",
  category: "Workshop",
  description:
    "A hands-on workshop introducing students to Google AI Studio and the process of building AI-powered applications using prompts, PRDs, APIs, frontend, and backend integration.",
  longDescription:
    "An interactive beginner-friendly session where students explore Google AI Studio, understand how AI-powered applications are planned and developed, and learn how frontend, backend, APIs, and Product Requirements Documents (PRDs) work together to turn an idea into a functional application.",
  date: "10-10-2026",
  time: "9:30 AM - 11:00 PM",
  venue: "Seminar hall - 1",
  image: "images/events/events-3.svg",
  registrationLink: "#register",
  status: "upcoming",
  teamSize: "Individual",
  eligibility: "All students",
  rules: [
    "Open to students from all branches.",
    "No prior AI development experience is required.",
    "Participants should bring a laptop for the hands-on session."
  ],
  schedule: [
    { time: "10:00 AM", activity: "Introduction to Google AI Studio" },
    { time: "10:20 AM", activity: "Understanding ideas, prompts and PRDs" },
    { time: "10:45 AM", activity: "Building the frontend of an AI application" },
    { time: "11:10 AM", activity: "Understanding backend and API integration" },
    { time: "11:35 AM", activity: "Hands-on AI application development" },
    { time: "11:50 AM", activity: "Demo, Q&A and next steps" }
  ],
  faq: [
    {
      q: "Do I need prior AI or coding experience?",
      a: "No, the workshop is designed to be beginner-friendly and covers the concepts from the basics."
    },
    {
      q: "What will we learn in the workshop?",
      a: "Participants will explore Google AI Studio, PRDs, prompting, frontend, backend, APIs, and how these components work together in an AI application."
    },
    {
      q: "Do I need to bring a laptop?",
      a: "Yes, participants are encouraged to bring a laptop for the hands-on activities."
    }
  ],
  result:
    "Students gained practical exposure to Google AI Studio and learned how to turn an idea into an AI-powered application by connecting PRDs, frontend, backend, APIs, and AI capabilities."
} ];