<p align="center">
  <img src="public/logo.png" alt="Marcel Portfolio logo" width="120" />
</p>

<h1 align="center">Marcel's Portfolio</h1>

<p align="center">
  Personal portfolio of Marcel Esplugas Jacobo, Full Stack Developer based in Barcelona.<br />
  <a href="https://marcel14.dev"><strong>marcel14.dev</strong></a>
</p>

## About

A single-screen, bento-style portfolio: everything fits on one page without scrolling on desktop, and it stacks into a single column on mobile.

- **Profile** with contact links (GitHub, LinkedIn, email copy-to-clipboard, CV).
- **GitHub contributions** for the last six months.
- **Technologies, tools, languages and job preferences.**
- **Experience and studies.**
- **Projects**: the two featured ones in the grid and a "See all projects" modal with the rest.
- **Little extras**: a song I've been listening to, the book I'm reading and a spinning ASCII donut.
- **English and Spanish**, switchable from the header.

## Tech stack

- [React 19](https://react.dev) – UI
- [Vite](https://vite.dev) – dev server and build
- [Tailwind CSS 4](https://tailwindcss.com) – styling
- [react-github-calendar](https://github.com/grubersjoe/react-github-calendar) – contribution graph
- Native `<dialog>` element – projects modal
- [ESLint](https://eslint.org) + [Prettier](https://prettier.io) – linting and formatting

## Getting started

```bash
npm install
npm run dev
```

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build into `dist/`        |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | ESLint (React, hooks, react-refresh) |
| `npm run format`  | Format `src/` and `index.html`       |

## Editing content

- All texts and data live in `src/components/Texts.jsx`, in English and Spanish.
- To add a project, append it to `projects` and add its description under both languages in `projectTexts`. Projects with `featured: true` (keep it to 2) appear in the grid; all of them appear in the modal.
- Book and song covers are in `src/assets/books` and `src/assets/songs`. They are WebP, at most 400 px wide.
- The social preview image is generated from `scripts/og-image.html` into `public/og-image.png`. SEO and Open Graph tags are in `index.html`.
