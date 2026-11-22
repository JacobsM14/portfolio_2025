export default {
  meta: {
    title: "Marcel Esplugas Jacobo — Desarrollador Full Stack en Barcelona",
    description:
      "Portfolio de Marcel Esplugas Jacobo, desarrollador Full Stack en Barcelona. React, Node.js, TypeScript y Tailwind CSS. Proyectos, experiencia y contacto.",
    imageAlt: "Marcel Esplugas Jacobo, desarrollador Full Stack en Barcelona",
    ogLocale: "es_ES",
  },
  labels: {
    headerTitle: "Portfolio de Marcel",
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
    mailCopied: "Email copiado",
    changeLanguage: "Cambiar idioma",
    viewCv: "Ver CV",
    contributions: "{{count}} contribuciones",
    seeAllProjects: "Ver todos los proyectos",
    allProjects: "Todos los proyectos",
    close: "Cerrar",
    calendarError: "No se pudo cargar la actividad de GitHub.",
  },
  preferences: [
    "Híbrido",
    "Remoto",
    "Frontend",
    "Junior",
    "Parcial",
    "Completa",
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Catalán", level: "Nativo" },
    { language: "Inglés", level: "Avanzado" },
  ],
  experiences: [
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
  studies: [
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
  projects: {
    apexWorld: {
      desc: "CRM gamificado para la recaudación de fondos de ONG, construido sobre una mezcla de sistemas complejos: jerarquías de equipos y familias, duelos, logros y ligas donde cada partida cambia según el evento (duelos por equipos, todos contra un jefe final, o royale rumble, un todos contra todos). Cada modo añade otra capa de complejidad.",
      note: "El proyecto en el que trabajo activamente como desarrollador contratado.",
    },
    fort: {
      desc: "La versión de app móvil de Gymlogs: sin API, solo móvil.",
      note: "Publicada en Google Play. Tanto la app como su landing son de código abierto.",
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
  books: {
    noLongerHuman: {
      title: "Indigno de Ser Humano",
      description:
        "Un descenso íntimo a la alienación y la autodestrucción de un hombre que no logra encajar en la sociedad.",
    },
    heartOfDarkness: {
      title: "El Corazón de las Tinieblas",
      description:
        "Una novela que narra un viaje al corazón oscuro del colonialismo y la naturaleza humana.",
    },
    childhoodsEnd: {
      title: "El Fin de la Infancia",
      description:
        "Una novela sobre el fin de la humanidad tal como la conocemos y el inicio de una nueva evolución.",
    },
    clockworkOrange: {
      title: "La Naranja Mecánica",
      description:
        "Una novela sobre la violencia, la libertad y las consecuencias de la manipulación social.",
    },
  },
};
