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

- **Header** with the CV (opens the PDF) and the language switch.
- **Profile** with contact links (GitHub, LinkedIn, email copy-to-clipboard, Goodreads, Steam).
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
- [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) – English and Spanish
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
| `npm run format`  | Format `src/`, HTML and Vite config  |

## Editing content

- Translatable texts live in `src/i18n/locales/en.js` and `src/i18n/locales/es.js`. Both files must have the same keys; in development the console warns about any key that is missing or extra.
- Data that isn't translated (technologies, tools, project links, book covers) lives in `src/data/`.
- To add a project, append it to `projects` in `src/data/projects.js` and add its `desc` (and optional `note`) under `projects` in both locales. Projects with `featured: true` (keep it to 2) appear in the grid; all of them appear in the modal.
- i18next is set up in `src/i18n/index.js`. Components use `useTranslation()` from `react-i18next`: `t("labels.key")` for texts and `t("experiences", { returnObjects: true })` for lists and objects.
- Book and song covers are in `src/assets/books` and `src/assets/songs`. They are WebP, at most 400 px wide.
- The social preview image is generated from `scripts/og-image.html` into `public/og-image.png`. SEO and Open Graph tags are in the `index.html` template; their texts are in each locale's `meta`.

## Languages

English is served at `/` and Spanish at `/es/`. Each URL ships its own HTML with its own `<html lang>`, title, description, Open Graph tags and `hreflang` links, so search engines and link previews see the right language. The header button switches language in place and updates the URL.

`index.html` is a template: `vite-plugins/i18nHtml.js` fills its `{{…}}` values and `<!-- i18n:… -->` blocks from each locale's `meta`, in dev and in the build. `es/index.html` is only a stub so Vite has an entry for `/es/`. The plugin also generates `sitemap.xml`.

On `/`, a small inline script redirects to `/es/` if the visitor picked Spanish before or their browser is in Spanish. `/es/` never redirects, so shared links are respected.

To add a language: create `src/i18n/locales/<lang>.js` (including `meta`), register it in `src/i18n/config.js` (`locales` and `PATHS`), copy the `es/index.html` stub to `<lang>/index.html` and add it to `build.rollupOptions.input` in `vite.config.js`. The HTML, `hreflang` links, redirect and sitemap update themselves.
