export default {
  meta: {
    title: "Marcel Esplugas Jacobo — Full Stack Developer in Barcelona",
    description:
      "Portfolio of Marcel Esplugas Jacobo, a Full Stack Developer based in Barcelona. React, Node.js, TypeScript and Tailwind CSS. Projects, experience and contact.",
    imageAlt: "Marcel Esplugas Jacobo, Full Stack Developer in Barcelona",
    ogLocale: "en_US",
  },
  labels: {
    headerTitle: "Marcel's Portfolio",
    technologies: "Technologies",
    tools: "Tools",
    preferences: "Looking for",
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
    recentReading: "Recent reading",
    recentlyPlayed: "Recently played",
    mailCopied: "Email copied",
    changeLanguage: "Change language",
    viewCv: "View CV",
    contributions: "{{count}} contributions",
    seeAllProjects: "See all projects",
    allProjects: "All projects",
    close: "Close",
    calendarError: "Couldn't load GitHub activity right now.",
  },
  preferences: [
    "Hybrid",
    "Remote",
    "Frontend",
    "Junior",
    "Part-time",
    "Full-time",
  ],
  languages: [
    { language: "Spanish", level: "Native" },
    { language: "Catalan", level: "Native" },
    { language: "English", level: "Advanced" },
  ],
  experiences: [
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
  studies: [
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
  projects: {
    apexWorld: {
      desc: "Gamified CRM for NGO fundraising, built on a mix of complex systems: team and family hierarchies, duels, achievements, and leagues where every match changes with the event (team duels, everyone vs. a final boss, or royale rumble, a free-for-all). Each mode adds another layer of complexity.",
      note: "The project I work on actively as a hired developer.",
    },
    fort: {
      desc: "The mobile app version of Gymlogs: no API, mobile only.",
      note: "Published on Google Play. Both the app and its landing page are open source.",
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
  books: {
    noLongerHuman: {
      title: "No Longer Human",
      description:
        "An intimate descent into the alienation and self-destruction of a man who fails to fit into society.",
    },
    heartOfDarkness: {
      title: "Heart of Darkness",
      description:
        "A novella that narrates a journey into the dark heart of colonialism and human nature.",
    },
    childhoodsEnd: {
      title: "Childhood's End",
      description:
        "A novel about the end of humanity as we know it and the beginning of a new evolution.",
    },
    clockworkOrange: {
      title: "A Clockwork Orange",
      description:
        "A novel about violence, freedom, and the consequences of social control.",
    },
  },
};
