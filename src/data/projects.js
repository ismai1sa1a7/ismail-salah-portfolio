// Edit this file to add projects. `demo` / `caseStudy` are optional —
// omit any that don't apply and the related button won't render.
// `caseStudy` follows the same 7-step structure for every project so the
// case study page/modal can stay fully reusable.

import bridgetechImage from "../assets/projects/bridgetech.png";
import brightsmileImage from "../assets/projects/brightsmile-sostac.png";

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
  {
    id: "brightsmile-sostac",
    name: "BrightSmile: SOSTAC Marketing Plan",
    description:
      "A complete digital marketing plan for a fictional dental clinic, built with the SOSTAC framework as a practical case study after completing Digital Marketing for Healthcare Professionals.",
    tech: ["SOSTAC", "Digital Marketing", "Healthcare Marketing", "Market Analysis"],
    image: brightsmileImage,
    demo: null,
    // Optional: put the exported PDF in /public with this exact file name.
    document: "/brightsmile-sostac-plan.pdf",
    documentLabel: "View Plan (PDF)",
    caseStudy: {
      problem:
        "BrightSmile is a newly opened dental clinic with modern equipment but low awareness, no website, no Google reviews, and almost no digital presence, so new patients can't find or trust it.",
      research:
        "Analyzed the local dental market, built three patient personas, compared a large chain with a neighborhood clinic, and used a SWOT analysis and a BCG view of the clinic's services to decide where to focus.",
      idea:
        "Use the SOSTAC framework (Situation, Objectives, Strategy, Tactics, Action, Control) to turn that analysis into a plan that moves patients from awareness to bookings to referrals.",
      solution:
        "A six-step plan with SMART objectives, a channel strategy led by Google Business Profile, Instagram, TikTok, Facebook, and WhatsApp, a 6-month action plan with a budget, and weekly and monthly KPIs that feed the next planning cycle.",
      technology: ["SOSTAC", "BCG Matrix", "Ansoff Matrix", "SWOT Analysis", "Social Media Marketing"],
      role:
        "Created independently as a practical project after completing the MedSpark course. The clinic is fictional, so all baselines, targets, and budgets are illustrative assumptions.",
      outcome: null, // Only shown when real results are available.
    },
  },
];

export default projects;
