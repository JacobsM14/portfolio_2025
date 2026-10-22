# 💼 Marcel's Portfolio

A fast, modern, and responsive developer portfolio built with **Vite**, **React**, and **Tailwind CSS**.

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build into `dist/`        |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | ESLint (React, hooks, react-refresh) |
| `npm run format`  | Format `src/` and `index.html`       |

## Project layout

- `src/App.jsx` – page layout (bento grid) and language state (`en` by default, `es` via the toggle).
- `src/components/Texts.jsx` – all copy and data (technologies, experience, projects, labels). Add new strings to **both** languages; the getters fall back to English. To add a project: append it to `projects` (id, title, techs, links) and add its `desc` / optional `note` under both languages in `projectTexts`. Projects with `featured: true` (keep it to 2) are shown in the bento; all of them appear in the "See all projects" modal (`ProjectsModal.jsx`).
- `src/components/Books.jsx`, `Songs.jsx` – the "recent reading" / "recently played" cards (a random entry is picked on each visit).
- `src/assets/icons/` – one component per icon; `SocialIcons.jsx` holds the social links (including the contact email).
- `src/utils/selectLastHalfYear.js` – filters the GitHub contribution calendar to the last 6 calendar months.

## Notes

- Install with the official registry (`npm install --registry=https://registry.npmjs.org`) so `package-lock.json` does not point at a mirror.
- Social preview image: edit `scripts/og-image.html` and regenerate `public/og-image.png` (1200×630) with `firefox --headless --window-size=1200,630 --screenshot public/og-image.png file://$PWD/scripts/og-image.html`. SEO/Open Graph tags (and the `https://marcel14.dev` URL) live in `index.html`.
- Images in `src/assets/books` and `src/assets/songs` are WebP, ≤ 400 px wide; keep new ones small.
