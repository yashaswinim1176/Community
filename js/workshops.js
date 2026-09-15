/* =========================================================
   WORKSHOPS DATA
   Add a new workshop by adding a new object to this array.
   ========================================================= */

const workshops = [
  {
    id: "workshop-001",
    title: "Hands-on with Large Language Models",
    category: "Workshop",
    description: "A practical session on prompting, fine-tuning basics and building small LLM-powered apps.",
    longDescription:
      "This workshop walks through how large language models work under the hood, then moves into a hands-on lab where attendees build a small retrieval-augmented application using open tools.",
    date: "2026-09-28",
    time: "3:00 PM - 6:00 PM",
    venue: "Seminar Hall 2",
    image: "images/workshops/workshops-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "Second year and above",
    rules: [
      "Bring a laptop with Python 3.10+ installed.",
      "Pre-workshop setup instructions will be emailed after registration."
    ],
    schedule: [
      { time: "3:00 PM", activity: "How LLMs work: a practical overview" },
      { time: "3:45 PM", activity: "Prompting patterns and evaluation" },
      { time: "4:30 PM", activity: "Hands-on lab: build a mini RAG app" },
      { time: "5:45 PM", activity: "Q&A and wrap-up" }
    ],
    faq: [
      { q: "Do I need ML background?", a: "No, basic Python knowledge is enough." },
      { q: "Will slides be shared?", a: "Yes, all material is shared in the community drive after the session." }
    ]
  },
  {
    id: "workshop-002",
    title: "Git & GitHub for Real Projects",
    category: "Workshop",
    description: "Branching, pull requests, code review and resolving conflicts, taught through a live group project.",
    longDescription:
      "A beginner-to-intermediate workshop where attendees collaborate on a shared repository in real time, learning the git workflow used in most software teams.",
    date: "2026-09-12",
    time: "2:00 PM - 4:30 PM",
    venue: "Computer Lab 3",
    image: "images/workshops/workshops-2.svg",
    registrationLink: "#register",
    status: "completed",
    teamSize: "Individual",
    eligibility: "All students",
    rules: ["Bring a laptop with git installed.", "A GitHub account is required."],
    schedule: [
      { time: "2:00 PM", activity: "Git basics and mental model" },
      { time: "2:45 PM", activity: "Branching and pull requests" },
      { time: "3:30 PM", activity: "Live group repository exercise" },
      { time: "4:15 PM", activity: "Common pitfalls and Q&A" }
    ],
    faq: [{ q: "Is this only for CS students?", a: "No, it's open to everyone regardless of branch." }],
    result: "62 students attended and merged their first pull request into a shared practice repository."
  },
  {
    id: "workshop-003",
    title: "Docker & Deployment Fundamentals",
    category: "Workshop",
    description: "Package an app into a container and deploy it, from local development to a live server.",
    longDescription:
      "This workshop covers containerizing a web application with Docker, writing a docker-compose setup, and deploying it to a small cloud instance.",
    date: "2026-10-24",
    time: "1:00 PM - 4:00 PM",
    venue: "Seminar Hall 1",
    image: "images/workshops/workshops-1.svg",
    registrationLink: "#register",
    status: "upcoming",
    teamSize: "Individual",
    eligibility: "Second year and above",
    rules: ["Install Docker Desktop before attending.", "A free-tier cloud account is recommended but optional."],
    schedule: [
      { time: "1:00 PM", activity: "Containers vs virtual machines" },
      { time: "1:40 PM", activity: "Writing your first Dockerfile" },
      { time: "2:30 PM", activity: "docker-compose for multi-service apps" },
      { time: "3:20 PM", activity: "Deploying to a live instance" }
    ],
    faq: [{ q: "Do I need a paid server?", a: "No, we use a free-tier instance for the demo." }]
  }
];
