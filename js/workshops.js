/* =========================================================
   WORKSHOPS DATA
   Add a new workshop by adding a new object to this array.
   ========================================================= */

const workshops = [
  {
    id: "Workshop-1",
    title: "Google AI Studio Workshop: Prompting, Fine-tuning, and Building LLM Apps",
    category: "Workshop",
    description: "A practical session on prompting, fine-tuning basics and building small LLM-powered apps.",
    longDescription:
      "This workshop walks through how large language models work under the hood, then moves into a hands-on lab where attendees build a small retrieval-augmented application using open tools.",
    date: "2026-11-14",
    time: "9:30 PM - 1:30 PM",
    venue: "Seminar Hall 1",
    image: "images/workshops/workshops-1.svg",
    registrationLink: "#register",
    status: "Completed",
    teamSize: "Individual",
    eligibility: "1st year and above",
    
    schedule: [ ],
    faq: [
      { q: "Do I need ML background?", a: "No, basic Python knowledge is enough." },
      { q: "Will slides be shared?", a: "Yes, all material is shared in the community website after the session." }
    ]
  }
];
