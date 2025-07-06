import "./index.css";
import GitHubCalendar from "react-github-calendar";
import Spotify from "./components/spotify";
import Books from "./components/books";
import CV from "./assets/cv.pdf";
import { useEffect, useRef, useState } from "react";

function App() {
  const EMAIL = "marcel.eplu@gmail.com";
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Optionally, handle error here
    }
  };

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const technologies = [
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

  const tools = ["VS Code", "Postman", "GitHub", "Figma", "Jira"];

  const preferences = {
    es: ["Remoto", "Mudable", "Frontend", "Full time", "Part time", "Junior"],
    en: [
      "Hybrid",
      "Remote",
      "Relocation",
      "Frontend",
      "Full time",
      "Part time",
      "Junior",
    ],
  };

  const disponibility = false;

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

  const experiences = [
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
        link: "https://portfolio-84m83yc07-iljacobs-projects.vercel.app/",
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
        link: "https://portfolio-84m83yc07-iljacobs-projects.vercel.app/",
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

  function DonutAscii() {
    const preRef = useRef(null);

    useEffect(() => {
      let x = 1760,
        z = 0,
        y = 0;
      let running = true;

      const render = () => {
        if (!running) return;
        z += 0.07;
        y += 0.03;
        const a = [...new Array(x)].map((a, r) => (r % 80 === 79 ? "\n" : " "));
        const r = new Array(x).fill(0);
        const t = Math.cos(z),
          e = Math.sin(z),
          n = Math.cos(y),
          o = Math.sin(y);
        for (let s = 0; s < 6.28; s += 0.07) {
          const c = Math.cos(s),
            h = Math.sin(s);
          for (let s2 = 0; s2 < 6.28; s2 += 0.02) {
            const v = Math.sin(s2),
              M = Math.cos(s2),
              i = c + 2,
              l = 1 / (v * i * e + h * t + 5),
              p = v * i * t - h * e,
              d = 0 | (40 + 30 * l * (M * i * n - p * o)),
              m = 0 | (12 + 15 * l * (M * i * o + p * n)),
              f =
                0 |
                (8 * ((h * e - v * c * t) * n - v * c * e - h * t - M * c * o)),
              y2 = d + 80 * m;
            if (m < 22 && m >= 0 && d >= 0 && d < 79 && l > r[y2]) {
              r[y2] = l;
              a[y2] = ".,-~:;=!*#$@"[f > 0 ? f : 0];
            }
          }
        }
        if (preRef.current) {
          preRef.current.innerText = a.join("");
        }
      };

      const interval = setInterval(render, 50);

      return () => {
        running = false;
        clearInterval(interval);
      };
    }, []);

    return (
      <pre
        ref={preRef}
        style={{
          color: "#fff",
          background: "transparent",
          fontFamily: "monospace",
          fontSize: "4px",
          lineHeight: "4px",
          margin: 0,
          padding: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    );
  }
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const length = 4;
  const [book, setBooks] = useState({});
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * length)
  );

  useEffect(() => {
    const randIndex = Math.floor(Math.random() * length);
    setBooks(Books(language, randIndex));
    setRandomIndex(randIndex);
  }, []);

  useEffect(() => {
    setBooks(Books(language, randomIndex));
  }, [language]);

  return (
    <>
      <div className="w-screen min-h-screen bg-dark flex items-center justify-center">
        <div
          className="w-[98vw] max-w-[1400px] h-auto max-h-[90vh] grid grid-cols-1 grid-rows-none flex flex-col gap-4 p-2
          xl:w-[85%] xl:h-[85%]
          md:grid-cols-9 md:grid-rows-9 md:flex-none md:grid md:gap-4
        "
        >
          <div
            className="col-span-1 row-span-1 bg-primary/5 border-1 border-gray-normal rounded-3xl flex items-center justify-between px-4 py-2 mb-2
            md:col-span-9 md:row-span-1 md:px-8 md:py-0 md:mb-0
          "
          >
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Marcel portfolio
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 bg-dark border-1 border-gray-normal rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                style={{ cursor: "pointer" }}
                onClick={handleLanguageChange}
              >
                {language === "es" ? "ES" : "EN"}
              </button>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 flex flex-col gap-4
            md:col-span-3 md:row-span-8 md:grid md:grid-cols-7 md:grid-rows-6 md:gap-4
          "
          >
            <div
              className="col-span-1 row-span-1 bg-primary/5 border-1 border-gray-normal rounded-3xl flex flex-col items-center justify-center gap-4 p-4
              md:col-span-7 md:row-span-3 md:p-0
            "
            >
              <div className="w-22 h-22 rounded-[100%] bg-primary/30 flex items-center justify-center">
                <div className="bg-primary w-20 h-20 rounded-[100%] flex items-center justify-center">
                  <p className="text-3xl font-bold text-white">ME</p>
                </div>
              </div>
              <h1 className="text-white text-xl font-bold text-center">
                Marcel Esplugas Jacobo
              </h1>
              <p className="text-gray-light">Full Stack Developer</p>
              <p className="text-white text-center w-[90%] md:text-sm">
                {labels[language].userDesc}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                  />
                </svg>
                <p className="text-gray-light">
                  Barcelona, {labels[language]["country"]}
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 flex flex-col gap-4
              md:col-span-7 md:row-span-3 md:grid md:grid-cols-7 md:gap-4
            "
            >
              <div
                className="col-span-1 row-span-1 bg-dark border-1 border-gray-normal rounded-3xl flex flex-col items-center justify-center gap-4 text-white mb-2
                md:col-span-6 md:row-span-1 md:mb-0
              "
              >
                <GitHubCalendar
                  username="JacobsM14"
                  transformData={selectLastHalfYear}
                  hideColorLegend
                  labels={{
                    totalCount: "{{count}} contributions",
                  }}
                />
              </div>
              <div
                className="col-span-1 row-span-1 bg-primary/2 border-1 border-gray-normal rounded-3xl flex flex-row items-center justify-center gap-2 mb-2
                md:col-span-1 md:row-span-2 md:flex-col md:gap-4 md:mb-0
              "
              >
                <button
                  onClick={() => window.open("https://github.com/JacobsM14")}
                  style={{ cursor: "pointer" }}
                  title="github"
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M20 10.25q0 3.351-1.908 6.027t-4.928 3.703q-.352.068-.514-.093a.54.54 0 0 1-.163-.4V16.67q0-1.295-.677-1.895a9 9 0 0 0 1.335-.24q.591-.16 1.223-.52a3.7 3.7 0 0 0 1.055-.888q.423-.528.69-1.402t.267-2.008q0-1.616-1.028-2.75q.48-1.214-.105-2.723q-.364-.12-1.054.147a7 7 0 0 0-1.198.587l-.495.32a9 9 0 0 0-2.5-.346a9 9 0 0 0-2.5.347a12 12 0 0 0-.553-.36q-.345-.214-1.088-.514q-.741-.3-1.12-.18q-.572 1.507-.09 2.722q-1.03 1.134-1.03 2.75q0 1.134.268 2.002q.267.867.683 1.401a3.5 3.5 0 0 0 1.048.894q.632.36 1.224.52q.593.162 1.335.241q-.52.48-.638 1.375a2.5 2.5 0 0 1-.586.2a3.6 3.6 0 0 1-.742.067q-.43 0-.853-.287q-.423-.288-.723-.834a2.1 2.1 0 0 0-.631-.694q-.384-.267-.645-.32l-.26-.04q-.273 0-.378.06t-.065.153a.7.7 0 0 0 .117.187a1 1 0 0 0 .17.16l.09.066q.287.135.567.508q.28.374.41.68l.13.307q.17.507.574.821q.404.315.872.4q.468.087.905.094q.436.006.723-.047l.299-.053q0 .507.007 1.188l.006.72q0 .24-.17.4q-.168.162-.52.094q-3.021-1.028-4.928-3.703Q0 13.6 0 10.25q0-2.79 1.341-5.145a10.1 10.1 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.1 10.1 0 0 1 3.639 3.73Q20 7.461 20 10.25"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => window.open("www.linkedin.com/in/m-esplugas")}
                  style={{ cursor: "pointer" }}
                  title="linkedin"
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13 21H9V9h4v2a4.618 4.618 0 0 1 3.525-1.763A4.5 4.5 0 0 1 21 13.75V21h-4v-6.75a2.265 2.265 0 0 0-2.247-1.944A1.815 1.815 0 0 0 13 14.25V21Zm-6 0H3V9h4v12ZM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    copyEmailToClipboard();
                  }}
                  style={{ cursor: "pointer" }}
                  title="email"
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                    />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                  onClick={() => window.open(CV, "_blank")}
                  style={{ cursor: "pointer" }}
                  title="Open CV"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M249.18 328.324c-9.788 15.384-19.179 30.434-40.222 45.055c-11.256 7.89-37.164 23.306-73.99 23.306C64.709 396.685 8 345.605 8 255.801c0-78.486 53.345-140.486 128.466-140.486c30.434 0 57.474 10.521 77.387 26.304c18.414 14.65 27.038 29.304 34.563 42.456l-52.58 26.273c-3.762-8.626-8.29-17.649-19.913-27.406c-12.784-10.155-25.54-13.152-36.46-13.152c-42.821 0-65.364 39.825-65.364 84.145c0 58.238 29.7 87.143 65.364 87.143c34.563 0 48.48-24.042 57.474-39.426zm184.194-204.75H504l-92.037 265.22h-67.597l-90.904-265.22h70.625l54.843 188.6z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.goodreads.com/user/show/179143029-jacob"
                    )
                  }
                  style={{ cursor: "pointer" }}
                  title="goodreads"
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.88em"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7c-22.3 15.5-52.8 14.1-70.8 5.7c-37.1-17.3-49.5-58.6-46.8-97.2c4.3-60.9 40.9-87.9 75.3-87.5c46.9-.2 71.8 31.8 78.2 78.3M448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56M330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-1.2-.5-1.6-1.2c-9.6-20.7-35.9-46.3-76-46c-51.9.4-87.2 31.2-100.6 77.8c-4.3 14.9-5.8 30.1-5.5 45.6c1.7 77.9 45.1 117.8 112.4 115.2c28.9-1.1 54.5-17 69-45.2c.5-1 1.1-1.9 1.7-2.9c.2.1.4.1.6.2c.3 3.8.2 30.7.1 34.5c-.2 14.8-2 29.5-7.2 43.5c-7.8 21-22.3 34.7-44.5 39.5c-17.8 3.9-35.6 3.8-53.2-1.2c-21.5-6.1-36.5-19-41.1-41.8c-.3-1.6-1.3-1.3-2.3-1.3h-26.8c.8 10.6 3.2 20.3 8.5 29.2c24.2 40.5 82.7 48.5 128.2 37.4c49.9-12.3 67.3-54.9 67.4-106.3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://steamcommunity.com/profiles/76561198357047569/ "
                    )
                  }
                  style={{ cursor: "pointer" }}
                  title="goodreads"
                  className="p-2 rounded-lg border-1 border-gray-normal text-white hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.84 2.84 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84s-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04zm9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="col-span-1 row-span-1 border-1 rounded-3xl border-gray-normal bg-green-400/10 flex items-center justify-center text-white mt-2
                md:col-span-6 md:row-span-1 md:mt-0
              "
              >
                <Spotify />
              </div>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 flex flex-col gap-4
            md:col-span-6 md:row-span-2 md:grid md:grid-cols-6 md:grid-rows-2 md:gap-4
          "
          >
            {/* Technologies */}
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 md:col-span-4 xl:col-span-3 xl:row-span-2 md:row-span-2 h-[calc(100%)] overflow-y-auto">
              <div className="flex gap-3 items-center">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"
                    />
                  </svg>
                </span>
                <p className="text-white font-bold">
                  {labels[language]["technologies"]}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-light/40 text-white font-bold px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 md:col-span-2 md:row-span-2 overflow-y-auto">
              <div className="flex items-center">
                <span className="text-primary mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"
                    />
                  </svg>
                </span>
                <p className="text-white font-bold">
                  {labels[language]["tools"]}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-light/40 text-white font-bold px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4
              md:col-span-1 md:row-span-2 md:hidden xl:block
            "
            >
              <div className="flex gap-3 items-center">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m11.9 22l4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22zM4 19l-1.4-1.4l5.05-5.05q-.875-.875-1.588-2T4.75 8h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T12.1 6H1V4h7V2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45l-.75 2.05l-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"
                    />
                  </svg>
                </span>
                <p className="text-white font-bold">
                  {labels[language]["languages"]}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {languages[language].map((lang, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-primary rounded-[100%]"></div>
                    <span className="text-white pl-2">{lang.lenguage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 flex flex-col gap-4 md:hidden xl:grid
            md:col-span-2 md:row-span-3 md:grid md:grid-cols-6 md:grid-rows-5 md:gap-4
          "
          >
            <div
              className={`col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-2 flex flex-col items-center justify-center ${
                disponibility ? "bg-green-400/10" : "bg-red-400/10"
              } md:col-span-3 md:row-span-2`}
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`w-2 h-2 rounded-[100%] animate-pulse ${
                    disponibility ? "bg-green-500" : "bg-red-600"
                  }`}
                ></div>
                <p
                  className={`${
                    disponibility ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {disponibility
                    ? labels[language]["goodDisponibility"]
                    : labels[language]["badDisponibility"]}
                </p>
              </div>
              <p className="text-gray-light text-sm text-center">
                {disponibility
                  ? labels[language]["goodDisponibilityDesc"]
                  : labels[language]["badDisponibilityDesc"]}
              </p>
            </div>
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 md:col-span-3 md:row-span-5">
              <div className="flex gap-3 items-center">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="currentColor"
                      d="M1024 128q124 0 238 32t214 90t181 140t140 181t91 214t32 239t-32 238t-90 214t-140 181t-181 140t-214 91t-239 32t-238-32t-214-90t-181-140t-140-181t-91-214t-32-239t32-238t90-214t140-181t181-140t214-91t239-32m0 1664q106 0 204-27t183-78t156-120t120-155t77-184t28-204t-27-204t-78-183t-120-156t-155-120t-184-77t-204-28t-204 27t-183 78t-156 120t-120 155t-77 184t-28 204t27 204t78 183t120 156t155 120t184 77t204 28m0-1280q106 0 199 40t163 109t110 163t40 200t-40 199t-109 163t-163 110t-200 40t-199-40t-163-109t-110-163t-40-200t40-199t109-163t163-110t200-40m0 896q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149q0 80 30 149t82 122t122 83t150 30m0-512q27 0 50 10t40 27t28 41t10 50q0 27-10 50t-27 40t-41 28t-50 10q-27 0-50-10t-40-27t-28-41t-10-50q0-27 10-50t27-40t41-28t50-10"
                    />
                  </svg>
                </span>
                <p className="text-white font-bold">
                  {labels[language]["preferences"]}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {preferences[language].map((preference, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <div className="w-1 h-1 bg-primary rounded-[100%]"></div>
                    <span className="text-white text-sm pl-2">
                      {preference}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl overflow-hidden flex items-center justify-center md:col-span-3 md:row-span-3">
              {DonutAscii()}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4
            md:col-span-4 md:row-span-3 xl:col-span-3 xl:row-span-3
          "
          >
            <div className="flex gap-3 items-center">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M30 8H2v18h28ZM20 8s0-4-4-4s-4 4-4 4M8 26V8m16 18V8"
                  />
                </svg>
              </span>
              <p className="text-white font-bold">
                {labels[language]["experiences"]}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 flex-wrap h-[calc(100%-2rem)] overflow-y-auto">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="mb-4 border-l-2 border-primary p-2 text-sm"
                >
                  <p className="text-white font-bold">{exp.position}</p>
                  <p className="text-gray-light">{exp.company}</p>
                  <p className="text-gray-light">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10
            md:col-span-2 md:row-span-3 xl:col-span-1 xl:row-span-3
          "
          >
            <div className="flex gap-3 items-center">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12 14l9-5l-9-5l-9 5z" />
                    <path d="m12 14l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479z" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m12 14l9-5l-9-5l-9 5zm0 0l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479zm-4 6v-7.5l4-2.222"
                    />
                  </g>
                </svg>
              </span>
              <p className="text-white font-bold">
                {labels[language]["studies"]}
              </p>
            </div>
            <div className="mt-4 flex flex-col overflow-y-auto h-[calc(100%-2rem)]">
              {studies[language].map((study, index) => (
                <div key={index} className="mb-2 text-xs">
                  <h3 className="text-white font-bold">{study.degree}</h3>
                  <p className="text-gray-light">{study.institution}</p>
                  <p className="text-gray-light">{study.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 overflow-y-auto
            md:col-span-6 md:row-span-3 xl:col-span-4 xl:row-span-3
          "
          >
            <div className="flex gap-3 items-center">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12 14l9-5l-9-5l-9 5z" />
                    <path d="m12 14l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479z" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m12 14l9-5l-9-5l-9 5zm0 0l6.16-3.422a12.1 12.1 0 0 1 .665 6.479A11.95 11.95 0 0 0 12 20.055a11.95 11.95 0 0 0-6.824-2.998a12.1 12.1 0 0 1 .665-6.479zm-4 6v-7.5l4-2.222"
                    />
                  </g>
                </svg>
              </span>
              <p className="text-white font-bold">
                {labels[language]["projects"]}
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              {projects[language].map((project, index) => (
                <div
                  key={index}
                  className="text-sm p-1 border-1 border-gray-normal rounded-lg"
                >
                  <div className="flex justify-between gap-2">
                    <h3 className="text-white font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.link && (
                        <button
                          onClick={() => window.open(project.link, "_blank")}
                          style={{ cursor: "pointer" }}
                          className="text-primary mt-2 flex items-center flex-start gap-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.3em"
                            height="1.3em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
                            />
                          </svg>
                        </button>
                      )}
                      {project.repo && (
                        <button
                          onClick={() =>
                            window.open(project.repo, "_blank")
                          }
                          style={{ cursor: "pointer" }}
                          className="text-primary mt-2 flex items-center flex-start gap-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.3em"
                            height="1.3em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-light py-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-light/40 text-white font-bold px-2 py-1 rounded-full text-xs mr-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 bg-gradient-to-br from-orange-500/10 to-yellow-500/10
            md:col-span-2 md:row-span-3 md:hidden xl:block xl:col-span-2 xl:row-span-3
          "
          >
            <p className="text-white font-bold">
              {labels[language]["recentReading"]}
            </p>
            <div className="flex items-center py-4 gap-3">
              <img
                src={book.cover}
                alt={0 + "book"}
                className="w-30 rounded-lg"
              />
              <div className="flex flex-col ">
                <p className="text-white text-md font-bold pb-2">
                  {book.title}
                </p>
                <p className="text-gray-light pb-1">{book.author}</p>
                {/* <p className="text-gray-light text-sm">{book.description}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
