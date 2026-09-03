// Edit this file to add, remove, or regroup skills.
// `level` is optional and purely descriptive (never a fake percentage).

const skills = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML", level: "Core" },
      { name: "CSS", level: "Core" },
      { name: "JavaScript", level: "Core" },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    items: [
      { name: "Java", level: "Core" },
      { name: "Python", level: "Core" },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    items: [
      { name: "Machine Learning", level: "Learning" },
      { name: "RAG", level: "Learning" },
      { name: "LLM Concepts", level: "Learning" },
      { name: "Data Analysis", level: "Learning" },
    ],
  },
  {
    id: "other",
    label: "Other",
    items: [
      { name: "Git / GitHub", level: "Core" },
      { name: "Networking", level: "Familiar" },
      { name: "Cybersecurity", level: "Learning" },
      { name: "Problem Solving", level: "Core" },
    ],
  },
];

export default skills;
