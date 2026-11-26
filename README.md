<p align="center">
  <img src="public/logo.png" alt="Marcel Portfolio logo" width="120" />
</p>

<h1 align="center">Marcel's Portfolio</h1>

<p align="center">
  Personal portfolio of Marcel Esplugas Jacobo, Full Stack Developer based in Barcelona.<br />
  <a href="https://marcel14.dev"><strong>marcel14.dev</strong></a>
</p>

## About

A single-screen, bento-style portfolio: on laptops and desktops everything fits the window without scrolling, and on smaller screens it stacks into a single column.

- **Header** with the CV (opens the PDF) and the language switch.
- **Profile** with contact links (GitHub, LinkedIn, email copy-to-clipboard, Goodreads, Steam).
- **GitHub contributions** for the last six months.
- **Technologies, tools, languages and job preferences.**
- **Experience and studies.**
- **Projects**: the two featured ones in the grid and a "See all projects" modal with the rest.
- **Little extras**: a song I've been listening to, the book I'm reading and a spinning ASCII donut.
- **English and Spanish**, each on its own URL.

## Tech stack

- [Astro](https://astro.build) – static pages, one per language
- [Tailwind CSS 4](https://tailwindcss.com) – styling
- [React 19](https://react.dev) – only for one client-side island: the GitHub calendar
- [react-activity-calendar](https://github.com/grubersjoe/react-activity-calendar) – contribution graph, with data from the [GitHub contributions API](https://github.com/grubersjoe/github-contributions-api)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) – sitemap with `hreflang` alternates
- Native `<dialog>` element – projects modal
- TypeScript, checked with `astro check`

## Getting started

```bash
npm install
npm run dev
```

| Command           | What it does                                 |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server (`localhost:4321`)      |
| `npm run build`   | Production build into `dist/`                |
| `npm run preview` | Serve the production build locally           |
| `npm run check`   | Type-check `.astro`, `.ts` and `.tsx` files  |

## Project structure

```text
src/
├── components/
│   ├── layout/      Header
│   ├── ui/          Card, SectionTitle, TagList, BulletList
│   └── home/
│       ├── Home.astro   the grid: where every section sits at each breakpoint
│       ├── profile/     Profile, Socials, GithubActivity (React)
│       ├── skills/      Technologies, Tools, Languages
│       ├── availability/ Availability, Preferences
│       ├── career/      Experiences, Studies
│       ├── projects/    Projects, ProjectCard, ProjectsModal
│       └── extras/      NowPlaying (React), RecentBook (React), Donut
├── data/            content that isn't translated (TypeScript)
├── i18n/            en.json, es.json and utils.ts
├── layouts/         Layout.astro (the whole <head>)
├── pages/           index.astro (en) and es/index.astro
└── styles/          global.css (theme, `desktop` variant, modal animation)
```

## Editing content

- Translatable texts live in `src/i18n/en.json` and `src/i18n/es.json`, with flat keys (`"labels.projects"`, `"projects.fort.desc"`). Components read them with `useTranslations(Astro.currentLocale)`; a key missing in Spanish falls back to English. Keys are typed, so `astro check` flags any key that doesn't exist.
- Data that isn't translated (technologies, tools, companies, project links, book covers, songs) lives in `src/data/`. Lists are keyed by `id`, and their texts use that id: `` t(`experiences.${id}.position`) ``.
- To add a project, append it to `projects` in `src/data/projects.ts` and add `projects.<id>.desc` (and optional `projects.<id>.note`) to both JSON files. Projects with `featured: true` (keep it to 2) appear in the grid; all of them appear in the modal.
- Book and song covers are in `src/assets/books` and `src/assets/songs`. They are WebP, at most 400 px wide.
- The social preview image is generated from `scripts/og-image.html` into `public/og-image.png`. SEO and Open Graph tags are in `src/layouts/Layout.astro`; their texts are the `meta.*` keys of each JSON file.

## Layout

The grid in `Home.astro` is built with Tailwind breakpoints, and each section receives its position through its `class`. There are two extra pieces on top of them:

- **`desktop:` variant** (`global.css`): applies from 1024 px wide and 600 px tall. In that range the grid takes the height of the window, so the page never scrolls, and the root font size scales from 12 px to 16 px with the height (everything is in `rem`, so the whole UI scales with it). Below that, the page scrolls as usual.
- **Container queries**: the projects and book cards adapt to their own width instead of the window's, so they work in every grid area. Their thresholds are in `px` so they don't change with the root font size.

When changing a card, check that nothing overflows at small laptop sizes, such as 1280x600, 1366x650 and 1024x680.

## Languages

English is served at `/` and Spanish at `/es/`, using Astro's i18n routing (`astro.config.mjs`). Each page is plain static HTML with its own `<html lang>`, title, description, Open Graph tags and `hreflang` links, all built in `Layout.astro`. The header link goes to the other language's URL; there is no redirect based on the browser language, and no JavaScript involved in switching.

To add a language:

1. Create `src/i18n/<lang>.json` with the same keys as `en.json`.
2. Register it in `src/i18n/utils.ts` (`ui`, `languages` and `ogLocales`).
3. Add it to `i18n.locales` and to the sitemap `locales` in `astro.config.mjs`.
4. Create `src/pages/<lang>/index.astro`, copying `src/pages/es/index.astro`.
5. The language link in `Header.astro` only switches between English and Spanish, so with a third language it needs to become a list.
