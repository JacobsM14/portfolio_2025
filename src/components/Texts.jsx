export const technologies = [
  "React",
  "Node.js",
  "Express",
  "MySQL",
  "Typescript",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Javascript",
  "HTML",
  "CSS",
  "C++",
  "Java",
];

export const tools = ["VS Code", "Postman", "GitHub", "Figma", "Jira"];

export function getPreferences(lang) {
  const preferences = {
    es: ["Híbrido", "Remoto", "Frontend", "Junior", "Parcial", "Completa"],
    en: ["Hybrid", "Remote", "Frontend", "Junior", "Part-time", "Full-time"],
  };
  return preferences[lang] || preferences.en;
}

export function getLanguages(lang) {
  const languages = {
    en: [
      { language: "Spanish", level: "Native" },
      { language: "Catalan", level: "Native" },
      { language: "English", level: "Advanced" },
    ],
    es: [
      { language: "Español", level: "Nativo" },
      { language: "Catalán", level: "Nativo" },
      { language: "Inglés", level: "Avanzado" },
    ],
  };
  return languages[lang] || languages.en;
}

export function getExperiences(lang) {
  const experiences = {
    es: [
      {
        company: "Escola Sagrada Familia",
        position: "IT - Prácticas",
        duration: "2021 - 5 meses",
      },
      {
        company: "Infinitum Projects",
        position: "Web Developer - Prácticas",
        duration: "2023 - 6 meses",
      },
      {
        company: "Fundraisers",
        position: "Full Stack Developer",
        duration: "Marzo 2025 - Actualidad",
      },
    ],
    en: [
      {
        company: "Escola Sagrada Familia",
        position: "IT - Internship",
        duration: "2021 - 5 months",
      },
      {
        company: "Infinitum Projects",
        position: "Web Developer - Internship",
        duration: "2023 - 6 months",
      },
      {
        company: "Fundraisers",
        position: "Full Stack Developer",
        duration: "March 2025 - Present",
      },
    ],
  };
  return experiences[lang] || experiences.en;
}

export function getStudies(lang) {
  const studies = {
    es: [
      {
        institution: "Jaume Viladoms",
        degree: "Sistema Microinformático y Redes",
        duration: "2020 - 2022",
      },
      {
        institution: "Jaume Viladoms",
        degree: "Desarrollo de Aplicaciones Web",
        duration: "2022 - 2024",
      },
    ],
    en: [
      {
        institution: "Jaume Viladoms",
        degree: "Microcomputer Systems and Networks",
        duration: "2020 - 2022",
      },
      {
        institution: "Jaume Viladoms",
        degree: "Web Application Development",
        duration: "2022 - 2024",
      },
    ],
  };
  return studies[lang] || studies.en;
}

// Names, stack and links are not translated; the texts live in `projectTexts`.
// `featured` projects are the ones shown in the bento; the rest only in the modal.
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
    links: [],
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
      { label: "Web", url: "https://www.gymlogs.marcel14.dev/" },
      {
        label: "Frontend",
        url: "https://github.com/JacobsM14/GYMLOGS_FRONTEND",
      },
      {
        label: "Backend",
        url: "https://github.com/JacobsM14/GYMLOGS_BACKEND",
      },
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
];

const projectTexts = {
  en: {
    apexWorld: {
      desc: "Gamified CRM for NGO fundraising, built on a mix of complex systems: team and family hierarchies, duels, achievements, and leagues where every match changes with the event (team duels, everyone vs. a final boss, or royale rumble, a free-for-all). Each mode adds another layer of complexity.",
      note: "The project I work on actively as a hired developer.",
    },
    fort: {
      desc: "The mobile app version of Gymlogs: no API, mobile only.",
      note: "Work in progress. The repository and the app are not public yet, but I'll publish them soon.",
    },
    portfolio: {
      desc: "My current portfolio, the site you are on. I built it after the CMD one because I wanted something simpler that works on every device. I still like the CMD one, though.",
    },
    portfolioCmd: {
      desc: "An interactive CMD-style terminal portfolio with draggable windows and commands, in English and Spanish.",
      note: "Updated in 2026. Even I was surprised by some of the bad practices I committed back in 2024, when I started it.",
    },
    gymlogs: {
      desc: "A gym workout tracker, my end-of-degree final project. The code is split across two repositories (frontend and backend).",
      note: "Published in 2024. It is now quite outdated and doesn't represent my current level, but I'm fond of it. The site is sometimes down.",
    },
    chop: {
      desc: 'A weekend project: a Go command-line tool to register different commands and run them on demand. It\'s called chop because in Spanish "chuleta" can mean either a meat chop or a cheatsheet.',
    },
    mediumFreeOnly: {
      desc: "A Chromium extension that hides the Medium stories that aren't free. Another weekend project, and my introduction to browser extensions.",
      note: "It detects premium stories with JS, hides them with CSS and requests more. It has performance issues; in the future it would be better to intercept Medium's API calls instead.",
    },
  },
  es: {
    apexWorld: {
      desc: "CRM gamificado para la recaudación de fondos de ONG, construido sobre una mezcla de sistemas complejos: jerarquías de equipos y familias, duelos, logros y ligas donde cada partida cambia según el evento (duelos por equipos, todos contra un jefe final, o royale rumble, un todos contra todos). Cada modo añade otra capa de complejidad.",
      note: "El proyecto en el que trabajo activamente como desarrollador contratado.",
    },
    fort: {
      desc: "La versión de app móvil de Gymlogs: sin API, solo móvil.",
      note: "En desarrollo. El repositorio y la app todavía no son públicos, pero los publicaré pronto.",
    },
    portfolio: {
      desc: "Mi portfolio actual, la web en la que estás. Lo hice después del de CMD porque quería algo más simple que funcione en cualquier dispositivo. Aun así, el de CMD me sigue gustando.",
    },
    portfolioCmd: {
      desc: "Un portfolio interactivo estilo terminal CMD con ventanas arrastrables y comandos, en inglés y español.",
      note: "Actualizado en 2026. Hasta a mí me sorprendieron algunas de las malas prácticas que cometí en 2024, cuando lo empecé.",
    },
    gymlogs: {
      desc: "Un registro de entrenamientos de gimnasio, mi proyecto final de ciclo. El código está repartido en dos repositorios (frontend y backend).",
      note: "Publicado en 2024. Ahora está bastante desactualizado y no representa mi nivel actual, pero le tengo cariño. La web a veces está caída.",
    },
    chop: {
      desc: "Un proyecto de fin de semana: una herramienta de línea de comandos en Go para registrar distintos comandos y ejecutarlos cuando los necesites. Se llama chop («chuleta» en inglés) porque en español una chuleta puede ser tanto un corte de carne como una guía rápida de apuntes.",
    },
    mediumFreeOnly: {
      desc: "Una extensión de Chromium que oculta las historias de Medium que no son gratuitas. Otro proyecto de fin de semana y mi introducción a las extensiones de navegador.",
      note: "Detecta las historias premium con JS, las oculta con CSS y pide más. Tiene problemas de rendimiento; en el futuro sería mejor interceptar las llamadas a la API de Medium.",
    },
  },
};

export function getProjects(lang) {
  const texts = projectTexts[lang] || projectTexts.en;
  return projects.map((project) => ({ ...project, ...texts[project.id] }));
}

const labels = {
  es: {
    technologies: "Tecnologías",
    tools: "Herramientas",
    preferences: "Busco",
    busy: "Ocupado",
    busyDesc: "Pero abierto a ofertas.",
    available: "Disponible",
    availableDesc: "Para nuevos proyectos.",
    languages: "Idiomas",
    experiences: "Experiencias",
    studies: "Estudios",
    projects: "Proyectos",
    userDesc:
      "Desarrollador web con experiencia en React y creación de apps móviles para Android e iOS.",
    country: "España",
    recentReading: "Lectura reciente",
    recentlyPlayed: "Escuchado recientemente",
    mailCopied: "Mail copiado",
    changeLanguage: "Cambiar idioma",
    contributions: "{{count}} contribuciones",
    seeAllProjects: "Ver todos los proyectos",
    allProjects: "Todos los proyectos",
    close: "Cerrar",
    calendarError: "No se pudo cargar la actividad de GitHub.",
  },
  en: {
    technologies: "Technologies",
    tools: "Tools",
    preferences: "Prefer",
    busy: "Busy",
    busyDesc: "But open to offers.",
    available: "Available",
    availableDesc: "For new projects.",
    languages: "Languages",
    experiences: "Experiences",
    studies: "Studies",
    projects: "Projects",
    userDesc:
      "Web developer with experience in React and mobile app development for Android and iOS.",
    country: "Spain",
    recentReading: "Recent Reading",
    recentlyPlayed: "Recently played",
    mailCopied: "Mail copied",
    changeLanguage: "Change language",
    contributions: "{{count}} contributions",
    seeAllProjects: "See all projects",
    allProjects: "All projects",
    close: "Close",
    calendarError: "Couldn't load GitHub activity right now.",
  },
};

export function getLabel(lang, key) {
  return labels[lang]?.[key] ?? labels.en[key] ?? "";
}
