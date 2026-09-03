// Edit this file to add certificates. `image` is optional — leave it out
// (or set to null) to show the default placeholder preview.
// `verifyUrl` is optional — omit it if there's nothing to link to yet.

import edraakIntroToAi from "../assets/certificates/edraak-intro-to-ai.jpeg";
import edraakAiWorkplace from "../assets/certificates/edraak-ai-workplace.jpeg";
import edraakAiEmploymentSpecialization from "../assets/certificates/edraak-ai-employment-specialization.jpeg";
import edraakBeyondAi from "../assets/certificates/edraak-beyond-ai.jpeg";
import innovegypt from "../assets/certificates/innovegypt.jpeg";

const categories = ["ALL", "AI", "INNOVATION"];

const certificates = [
  {
    id: "ai-employment-specialization",
    name: "Artificial Intelligence for Employment Specialization",
    org: "Edraak (sponsored by Crescent Petroleum)",
    date: "29/7/2026",
    category: "AI",
    image: edraakAiEmploymentSpecialization,
    verifyUrl: null,
  },
  {
    id: "innovegypt",
    name: "InnovEgypt Training Program",
    org: "ITIDA / TIEC",
    date: "2026",
    category: "INNOVATION",
    image: innovegypt,
    verifyUrl: null,
  },
  {
    id: "edraak-intro-to-ai",
    name: "Introduction to Artificial Intelligence and Generative AI",
    org: "Edraak (sponsored by Crescent Petroleum)",
    date: "10/7/2026",
    category: "AI",
    image: edraakIntroToAi,
    verifyUrl: null,
  },
  {
    id: "edraak-ai-workplace",
    name: "Artificial Intelligence in the Workplace: Tools and Practical Applications",
    org: "Edraak (sponsored by Crescent Petroleum)",
    date: "12/7/2026",
    category: "AI",
    image: edraakAiWorkplace,
    verifyUrl: null,
  },
  {
    id: "edraak-beyond-ai",
    name: "Beyond Artificial Intelligence: Understanding Models, Costs, and Challenges",
    org: "Edraak (sponsored by Crescent Petroleum)",
    date: "29/7/2026",
    category: "AI",
    image: edraakBeyondAi,
    verifyUrl: null,
  },
];

export { categories };
export default certificates;
