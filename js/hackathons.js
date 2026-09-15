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
  },
  {
    id: "hackathon-002",
    title: "CyberGuard Security Hackathon",
    category: "Hackathon",
    description: "Capture-the-flag style hackathon focused on web security, cryptography and network defense.",
    longDescription:
      "A hands-on hackathon built around a live capture-the-flag range. Solve progressively harder challenges across web exploitation, reverse engineering and cryptography while learning from the security chapter's mentors.",
    date: "2026-11-08",
    time: "9:30 AM - 5:00 PM",
    venue: "Cybersecurity Lab, Block D",
    image: "images/hackathons/hackathons-2.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "1-3 Members",
    eligibility: "All Engineering Students",
    rules: [
      "Individual or team entries of up to 3 members are accepted.",
      "Attacking infrastructure outside the provided CTF range is prohibited.",
      "Sharing flags between teams results in disqualification.",
      "A laptop with a modern browser is required."
    ],
    schedule: [
      { time: "9:30 AM", activity: "Registration and briefing" },
      { time: "10:00 AM", activity: "CTF range opens" },
      { time: "3:30 PM", activity: "Range closes" },
      { time: "4:00 PM", activity: "Walkthrough of top challenges" },
      { time: "4:45 PM", activity: "Prize distribution" }
    ],
    faq: [
      { q: "Do I need prior security experience?", a: "Beginner-friendly challenges are included alongside advanced ones." },
      { q: "Will write-ups be shared afterward?", a: "Yes, official write-ups are published after the event." }
    ]
  },
  {
    id: "hackathon-003",
    title: "GreenTech Sustainability Hackathon",
    category: "Hackathon",
    description: "Build tech-driven solutions for campus sustainability, energy use and waste reduction.",
    longDescription:
      "This hackathon pairs engineering students across disciplines to design practical sustainability tools, from IoT energy monitors to waste-sorting applications, with feedback from campus facilities staff.",
    date: "2026-09-05",
    time: "10:00 AM - 5:00 PM",
    venue: "Innovation Hall",
    image: "images/hackathons/hackathons-1.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "2-5 Members",
    eligibility: "Open to all branches",
    rules: [
      "Teams of 2 to 5 members from any branch.",
      "Hardware prototypes must be safe for indoor demonstration.",
      "Submissions must include cost and impact estimates."
    ],
    schedule: [
      { time: "10:00 AM", activity: "Kickoff and problem briefing" },
      { time: "12:00 PM", activity: "Mentor check-ins" },
      { time: "4:00 PM", activity: "Final presentations" },
      { time: "5:00 PM", activity: "Results announced" }
    ],
    faq: [
      { q: "Were hardware kits provided?", a: "Basic sensor kits were provided on request during registration." }
    ],
    result: "18 teams presented working prototypes; the winning team built a smart irrigation controller for the campus garden."
  }
];
