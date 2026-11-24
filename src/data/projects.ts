export const projects = [
  {
    id: "apexWorld",
    title: "Apex World",
    featured: true,
    techs: ["React", "Tailwind", "Go"],
    links: [{ label: "Web", url: "https://we-apex.com/" }],
  },
  {
    id: "fort",
    title: "Fort",
    featured: true,
    techs: ["React Native", "SQLite", "DrizzleORM", "Expo"],
    links: [
      { label: "Web", url: "https://fort.marcel14.dev/" },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.marcelesplu.fort",
      },
      { label: "App", url: "https://github.com/JacobsM14/fort-mobile" },
      {
        label: "Landing",
        url: "https://github.com/JacobsM14/fort-landing-page",
      },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    techs: ["Vite", "React", "Tailwind"],
    links: [
      { label: "Web", url: "https://marcel14.dev/" },
      { label: "GitHub", url: "https://github.com/JacobsM14/portfolio_2025" },
    ],
  },
  {
    id: "portfolioCmd",
    title: "Portfolio CMD",
    techs: ["Vite", "React", "Tailwind", "i18next"],
    links: [
      { label: "Web", url: "https://portfolio-cmd.vercel.app/" },
      { label: "GitHub", url: "https://github.com/JacobsM14/portfolio-cmd" },
    ],
  },
  {
    id: "gymlogs",
    title: "Gymlogs",
    techs: ["React", "Tailwind", "axios", "Bun", "Vite", "MySQL"],
    links: [
      { label: "GitHub", url: "https://github.com/JacobsM14/gymlogs" },
    ],
  },
  {
    id: "chop",
    title: "Chop",
    techs: ["Go", "Cobra", "Huh"],
    links: [{ label: "GitHub", url: "https://github.com/JacobsM14/chop" }],
  },
  {
    id: "mediumFreeOnly",
    title: "MediumFreeOnly",
    techs: ["JavaScript", "CSS", "Manifest V3"],
    links: [
      { label: "GitHub", url: "https://github.com/JacobsM14/MediumFreeOnly" },
    ],
  },
] as const;

