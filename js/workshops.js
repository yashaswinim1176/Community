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
  }
];
