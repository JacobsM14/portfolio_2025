export function Technologies() {
  return [
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
}

export function Tools() {
  return ["VS Code", "Postman", "GitHub", "Figma", "Jira"];
}

export function Preferences(lang) {
  const preferences = {
    es: ["Hibrido", "Remoto", "Frontend", "Junior", "Parcial", "Completa"],
    en: ["Hybrid", "Remote", "Frontend", "Junior", "Part-time", "Full-time"],
  };
  return preferences[lang] || preferences.es;
}

export function Languages(lang) {
  const languages = {
    en: [
      { lenguage: "Spanish", level: "Native" },
      { lenguage: "Catalan", level: "Native" },
      { lenguage: "English", level: "Advanced" },
    ],
    es: [
      { lenguage: "Español", level: "Nativo" },
      { lenguage: "Catalán", level: "Nativo" },
      { lenguage: "Inglés", level: "Avanzado" },
    ],
  };
  return languages[lang] || languages.es;
}

export function Experiences() {
  return [
    {
      company: "Escola Sagrada Familia",
      position: "IT - Practicas",
      duration: "2021 - 5 meses",
    },
    {
      company: "Infinitum Projects",
      position: "Web Developer - Practicas",
      duration: "2023 - 6 meses",
    },
    {
      company: "Fundraisers",
      position: "Full Stack Developer",
      duration: "Marzo 2025 - Actualidad",
    },
  ];
}

export function Studies(lang) {
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
  return studies[lang] || studies.es;
}

export function Projects(lang) {
  const projects = {
    en: [
      {
        title: "Gymlogs",
        link: "https://www.gymlogs.marcel14.dev/",
        repo: "https://github.com/JacobsM14/GYMLOGS_FRONTEND",
        desc: "Web application for managing workout routines and tracking progress.",
        techs: ["React", "Bun", "MySQL", "Express", "Api"],
        state: "Cancelled",
      },
      {
        title: "CMD Portfolio",
        link: "https://portfolio-cmd.vercel.app/",
        repo: "https://github.com/JacobsM14/portfolio-cmd",
        desc: "Before this portfolio, I built one in terminal style using React and Tailwind.",
        techs: ["React", "Tailwind CSS", "Vite"],
        state: "Cancelled",
      },
      {
        title: "Fundraisers",
        link: "https://we-apex.com/",
        desc: "Gamified web application for managing fundraising campaigns.",
        techs: ["React", "Tailwind CSS", "Express", "Golang"],
        state: "In development",
      },
    ],
    es: [
      {
        title: "Gymlogs",
        link: "https://www.gymlogs.marcel14.dev/",
        repo: "https://github.com/JacobsM14/GYMLOGS_FRONTEND",
        desc: "Aplicación web para gestionar rutinas de entrenamiento y seguimiento de progresos.",
        techs: ["React", "Bun", "MySQL", "Express", "Api"],
        state: "Cancelado",
      },
      {
        title: "CMD Portfolio",
        link: "https://portfolio-cmd.vercel.app/",
        repo: "https://github.com/JacobsM14/portfolio-cmd",
        desc: "Antes de este portfolio, hice uno en modo terminal con React y Tailwind.",
        techs: ["React", "Tailwind CSS", "Vite"],
        state: "Cancelado",
      },
      {
        title: "Fundraisers",
        link: "https://we-apex.com/",
        desc: "Aplicación web gamificada para gestionar campañas de recaudación de fondos.",
        techs: ["React", "Tailwind CSS", "Express", "Golang"],
        state: "En desarrollo",
      },
    ],
  };
  return projects[lang] || projects.es;
}

export function Labels(lang, sec) {
  const labels = {
    es: {
      technologies: "Tecnologías",
      tools: "Herramientas",
      preferences: "Prefiero",
      badDisponibility: "Ocupado",
      badDisponibilityDesc: "Pero abierto a ofertas.",
      goodDisponibility: "Disponible",
      goodDisponibilityDesc: "Para nuevos proyectos.",
      languages: "Idiomas",
      experiences: "Experiencias",
      studies: "Estudios",
      projects: "Proyectos",
      userDesc:
        "Desarrollador web con experiencia en React y creación de apps móviles para Android e iOS.",
      country: "España",
      recentReading: "Lectura reciente",
    },
    en: {
      technologies: "Technologies",
      tools: "Tools",
      preferences: "Preferences",
      badDisponibility: "Busy",
      badDisponibilityDesc: "But open to offers.",
      goodDisponibility: "Available",
      goodDisponibilityDesc: "For new projects.",
      languages: "Languages",
      experiences: "Experiences",
      studies: "Studies",
      projects: "Projects",
      userDesc:
        "Web developer with experience in React and mobile app development for Android and iOS.",
      country: "Spain",
      recentReading: "Recent Reading",
    },
  };
  return labels[lang][sec] || labels.es[sec] || labels.es;
}
