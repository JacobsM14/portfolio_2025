import "./index.css";
import GitHubCalendar from "react-github-calendar";
import Spotify from "./components/Spotify";
import Books from "./components/Books";
import LinkButton from "./components/LinkButton";
import Socials from "./assets/icons/SocialIcons";
import TechBase from "./components/TechBase";
import { useEffect, useState } from "react";
import Donut from "./components/Donut";
import {
  Technologies,
  Tools,
  Preferences,
  Languages,
  Experiences,
  Studies,
  Projects,
  Labels
} from "./components/Texts";

function App() {
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
  const socials = Socials();
  const technologies = Technologies();
  const tools = Tools();
  const experiences = Experiences();

  const disponibility = false;

  const [language, setLanguage] = useState("es");

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  const length = 4;
  const [book, setBooks] = useState({});
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const randIndex = Math.floor(Math.random() * length);
    setRandomIndex(randIndex);
  }, []);

  useEffect(() => {
    setBooks(Books(language, randomIndex));
  }, [language, randomIndex]);

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
                {Labels(language, "userDesc")}
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
                  Barcelona, {Labels(language, "country")}
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 flex flex-col gap-4
              md:col-span-7 md:row-span-3 md:grid md:grid-cols-7 md:gap-4
            "
            >
              <div
                className="col-span-1 row-span-1 bg-dark border-1 border-gray-normal rounded-3xl flex flex-col items-center justify-center gap-4 text-white mb-2 overflow-hidden
                md:col-span-6 md:row-span-1 md:mb-0
              "
              >
                <div className="scale-[90%]">
                  <GitHubCalendar
                    username="JacobsM14"
                    transformData={selectLastHalfYear}
                    hideColorLegend
                    labels={{
                      totalCount: "{{count}} contributions",
                    }}
                  />
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-gradient-to-b from-indigo-500/10 to-blue-500/10 border-1 border-gray-normal rounded-3xl flex flex-row items-center justify-center gap-2 mb-2
                md:col-span-1 md:row-span-2 md:flex-col md:gap-4 md:mb-0
              "
              >
                {Object.values(socials).map((social, index) => (
                  <LinkButton type={social.type} link={social.link} key={index}>
                    <social.icon />
                  </LinkButton>
                ))}
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
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 md:col-span-4 xl:col-span-3 xl:row-span-2 md:row-span-2 h-[calc(100%)] overflow-hidden">
              <div className="flex flex-col overflow-y-auto h-full">
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
                    {Labels(language, "technologies")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {technologies.map((tech, index) => (
                    <TechBase paddings={"px-3 py-1"} key={index}>
                      {tech}
                    </TechBase>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 md:col-span-2 md:row-span-2 overflow-hidden">
              <div className="flex flex-col overflow-y-auto h-full">
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
                    {Labels(language, "tools")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tools.map((tool, index) => (
                    <TechBase paddings={"px-3 py-1"} key={index}>
                      {tool}
                    </TechBase>
                  ))}
                </div>
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
                  {Labels(language, "languages")}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {Languages(language).map((lang, index) => (
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
                    ? Labels(language, "goodDisponibility")
                    : Labels(language, "badDisponibility")}
                </p>
              </div>
              <p className="text-gray-light text-sm text-center">
                {disponibility
                  ? Labels(language, "goodDisponibilityDesc")
                  : Labels(language, "badDisponibilityDesc")}
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
                  {Labels(language, "preferences")}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                {Preferences(language).map((preference, index) => (
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
              {Donut()}
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
                {Labels(language, "experiences")}
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
                {Labels(language, "studies")}
              </p>
            </div>
            <div className="mt-4 flex flex-col overflow-y-auto h-[calc(100%-2rem)]">
              {Studies(language).map((study, index) => (
                <div key={index} className="mb-2 text-xs">
                  <p className="text-white font-bold">{study.degree}</p>
                  <p className="text-gray-light">{study.institution}</p>
                  <p className="text-gray-light">{study.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl
            md:col-span-6 md:row-span-3 xl:col-span-4 xl:row-span-3 overflow-hidden
          "
          >
            <div className="flex flex-col overflow-y-auto h-full">
              <div className="flex gap-3 items-center pl-2 pt-2">
                <span className="text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m17.15 20.7l-6.05-6.1q-.5.2-1.012.3T9 15q-2.5 0-4.25-1.75T3 9q0-.9.25-1.712t.7-1.538L7.6 9.4l1.8-1.8l-3.65-3.65q.725-.45 1.538-.7T9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.088t-.3 1.012l6.1 6.05q.3.3.3.725t-.3.725l-2.1 2.1q-.3.3-.725.3t-.725-.3"
                    />
                  </svg>
                </span>
                <p className="text-white font-bold">
                  {Labels(language, "projects")}
                </p>
              </div>
              <div className="flex gap-4 p-3">
                {Projects(language).map((project, index) => (
                  <div
                    key={index}
                    className="text-sm p-2 border-1 border-gray-normal rounded-lg"
                  >
                    <div className="flex justify-between gap-2">
                      <p className="text-white font-bold">{project.title}</p>
                      <div className="flex items-center gap-2">
                        {project.link && (
                          <button
                            onClick={() => window.open(project.link, "_blank")}
                            style={{ cursor: "pointer" }}
                            key={index + "link_" + project.title}
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
                            <span className="hidden">link</span>
                          </button>
                        )}
                        {project.repo && (
                          <button
                            onClick={() => window.open(project.repo, "_blank")}
                            style={{ cursor: "pointer" }}
                            key={index + "repo_" + project.title}
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
                            <span className="hidden">git</span>
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-light py-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techs.map((tech, techIndex) => (
                        <TechBase
                          paddings={"px-2 py-1"}
                          margins={"mr-1"}
                          texts={"text-xs"}
                          key={techIndex}
                        >
                          {tech}
                        </TechBase>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border-1 border-gray-normal rounded-3xl p-4 bg-gradient-to-br from-orange-500/10 to-yellow-500/10
            md:col-span-2 md:row-span-3 md:hidden xl:block xl:col-span-2 xl:row-span-3 overflow-hidden
          "
          >
            <div className="overflow-y-auto h-full">
              <p className="text-white font-bold">
                {Labels(language, "recentReading")}
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
      </div>
    </>
  );
}

export default App;
