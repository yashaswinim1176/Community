/* =========================================================
   HACKATHONS DATA
   Add a new hackathon by adding a new object to this array.
   Do not edit this array's structure anywhere else.
   ========================================================= */

const hackathons = [
  {
    id: "hackathon-001",
    title: "NEXUS AI Innovation Hackathon",
    category: "Hackathon",
    description: "A 24-hour build sprint for AI-powered solutions to real campus and community problems.",
    longDescription:
      "Teams design, build and pitch a working AI prototype in 24 hours. Mentors from the ML and web dev chapters will be on the floor throughout, and every team gets access to GPU credits for the weekend.",
    date: "2026-10-17",
    time: "10:00 AM - 6:00 PM",
    venue: "Computer Science Lab, Block C",
    image: "images/hackathons/hackathons-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "2-4 Members",
    eligibility: "All Engineering Students",
    rules: [
      "Teams must have 2 to 4 members from any engineering branch.",
      "All code must be written during the event window.",
      "Use of open-source libraries and public APIs is allowed.",
      "Final submission must include a working demo and a 3-minute pitch."
    ],
    schedule: [
      { time: "10:00 AM", activity: "Check-in and team formation" },
      { time: "11:00 AM", activity: "Problem statements released" },
      { time: "1:00 PM", activity: "Build phase begins" },
      { time: "5:00 PM", activity: "Submissions close" },
      { time: "5:30 PM", activity: "Judging and pitches" },
      { time: "6:00 PM", activity: "Winners announced" }
    ],
    faq: [
      { q: "Do I need a team before registering?", a: "No, you can register solo and we'll help you find a team on the day." },
      { q: "Is there a registration fee?", a: "No, participation is free for all community members." }
    ]
  } ];