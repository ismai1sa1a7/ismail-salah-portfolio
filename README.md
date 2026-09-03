# Ismail Salah — Portfolio

A personal developer portfolio built with React, Vite, Tailwind CSS v4, Framer Motion, and lucide-react.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Editing content

All editable content lives in `src/data/`:

- `site.js` — name, tagline, about text, quick facts, social links, services, "currently learning", work process, testimonials
- `journey.js` — the "My Journey" timeline
- `skills.js` — skills grouped by category
- `certificates.js` — certificate cards (category filters live here too)
- `projects.js` — featured projects and their case study content

Replace the `YOUR_EMAIL`, `YOUR_LINKEDIN`, `YOUR_GITHUB`, `YOUR_WHATSAPP_NUMBER` placeholders in `site.js` with your real links. Add a real CV file and set `profile.resumeUrl` to enable the Download CV button. Set `testimonialsEnabled` to `true` in `site.js` once you have real testimonials to show — the section stays hidden until then.

## Structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Journey, Skills, Certificates, Projects, etc.
    ui/          Reusable building blocks (Button, Tag, Modal, Reveal, ...)
  data/          Editable content files
  hooks/         useActiveSection, useScrolled
  App.jsx
  main.jsx
```
