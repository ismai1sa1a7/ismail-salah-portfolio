// Edit this file to add projects. `demo` / `caseStudy` are optional —
// omit any that don't apply and the related button won't render.
// `caseStudy` follows the same 7-step structure for every project so the
// case study page/modal can stay fully reusable.

import bridgetechImage from "../assets/projects/bridgetech.png";

const projects = [
  {
    id: "bridgetech",
    name: "BridgeTech",
    description:
      "A platform concept designed to connect students with the technology industry through project-based learning and practical roadmaps.",
    tech: ["Web Development", "UI/UX", "Innovation", "Entrepreneurship"],
    image: bridgetechImage,
    demo: null,
    caseStudy: {
      problem:
        "Many CS students graduate with theoretical knowledge but little exposure to real, project-based industry work — making the jump from classroom to career difficult.",
      research:
        "Explored how students currently find practical experience, what gaps existing platforms leave open, and what a lightweight bridge between education and industry could look like.",
      idea:
        "A platform concept that pairs students with project-based learning tracks and clear, practical roadmaps toward industry-ready skills.",
      solution:
        "Concept for a structured platform where students pick a track, work through real project briefs, and build a portfolio as they go.",
      technology: ["Web Development", "UI/UX Design", "Innovation & Entrepreneurship frameworks"],
      role:
        "Worked on this together with Abdelrahman, leading the concept development and business analysis as part of an entrepreneurship training program, including market research and go-to-market thinking.",
      outcome: null, // Only shown when real results are available.
    },
  },
];

export default projects;
