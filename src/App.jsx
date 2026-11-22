import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import Spotify from "./components/Spotify";
import LinkButton from "./components/LinkButton";
import { socials } from "./assets/icons/SocialIcons";
import TechBase from "./components/TechBase";
import Donut from "./components/Donut";
import SectionTitle from "./components/SectionTitle";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsModal from "./components/ProjectsModal";
import LocationIcon from "./assets/icons/LocationIcon";
import CodeIcon from "./assets/icons/CodeIcon";
import ToolsIcon from "./assets/icons/ToolsIcon";
import LanguagesIcon from "./assets/icons/LanguagesIcon";
import PreferencesIcon from "./assets/icons/PreferencesIcon";
import ExperienceIcon from "./assets/icons/ExperienceIcon";
import StudiesIcon from "./assets/icons/StudiesIcon";
import { selectLastHalfYear } from "./utils/selectLastHalfYear";
import { technologies, tools } from "./data/profile";
import { books, getBook } from "./data/books";
import { useTranslation } from "react-i18next";

const isAvailable = true;

const transformContributions = (contributions) =>
  selectLastHalfYear(contributions);

function App() {
  const { t } = useTranslation();
  const [bookIndex] = useState(() => Math.floor(Math.random() * books.length));
  const [mailCopiedAt, setMailCopiedAt] = useState(0);
  const mailCopied = mailCopiedAt > 0;
  const [projectsOpen, setProjectsOpen] = useState(false);

  const book = getBook(t("books", { returnObjects: true }), bookIndex);

  const calendarLabels = useMemo(
    () => ({
      totalCount: t("labels.contributions", { skipInterpolation: true }),
    }),
    [t],
  );

  useEffect(() => {
    if (!mailCopiedAt) return;
    const timer = setTimeout(() => setMailCopiedAt(0), 3000);
    return () => clearTimeout(timer);
  }, [mailCopiedAt]);

  return (
    <>
      <div className="w-full min-h-screen bg-dark flex items-center justify-center relative py-4 md:py-2">
        <div
          className="w-[98vw] max-w-350 grid grid-cols-1 grid-rows-none gap-4 p-2
          xl:w-[85%]
          md:min-h-[85vh] md:grid-cols-9 md:grid-rows-9
        "
        >
          <Header />
          <div
            className="col-span-1 row-span-1 flex flex-col gap-4
            md:col-span-3 md:row-span-8 md:grid md:grid-cols-7 md:grid-rows-6 md:gap-4
          "
          >
            <div
              className="col-span-1 row-span-1 bg-primary/5 border border-gray-normal rounded-3xl flex flex-col items-center justify-center gap-4 p-4
              md:col-span-7 md:row-span-3 md:p-3 xl:p-0
            "
            >
              <div className="w-22 h-22 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center">
                  <p className="text-3xl font-bold text-white">ME</p>
                </div>
              </div>
              <h2 className="text-white text-xl font-bold text-center">
                Marcel Esplugas Jacobo
              </h2>
              <p className="text-gray-light">Full Stack Developer</p>
              <p className="text-white text-center w-[90%] md:text-sm">
                {t("labels.userDesc")}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-light">
                <LocationIcon />
                <p className="text-gray-light">
                  Barcelona, {t("labels.country")}
                </p>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 flex flex-col gap-4
              md:col-span-7 md:row-span-3 md:grid md:grid-cols-7 md:gap-4
            "
            >
              <div
                className="col-span-1 row-span-1 bg-dark border border-gray-normal rounded-3xl flex flex-col items-center justify-center gap-4 text-white mb-2 overflow-hidden
                md:col-span-5 xl:col-span-6 md:row-span-1 md:mb-0
              "
              >
                <div className="scale-[90%] w-full">
                  <GitHubCalendar
                    username="JacobsM14"
                    transformData={transformContributions}
                    showColorLegend={false}
                    labels={calendarLabels}
                    errorMessage={t("labels.calendarError")}
                  />
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-linear-to-b from-indigo-500/10 to-blue-500/10 border border-gray-normal rounded-3xl flex flex-row items-center justify-center gap-2 mb-2
                md:col-span-2 xl:col-span-1 md:row-span-2 md:flex-col md:gap-4 md:mb-0 py-2
              "
              >
                {Object.entries(socials).map(([key, social]) => (
                  <LinkButton
                    type={social.type}
                    link={social.link}
                    label={social.label}
                    key={key}
                    {...(social.type === "email"
                      ? { onClick: () => setMailCopiedAt(Date.now()) }
                      : {})}
                  >
                    <social.icon />
                  </LinkButton>
                ))}
              </div>
              <div
                className="hidden md:flex col-span-1 row-span-1 border rounded-3xl border-gray-normal bg-green-400/10 items-center justify-center text-white mt-2
                md:col-span-5 xl:col-span-6 md:row-span-1 md:mt-0
              "
              >
                <Spotify />
              </div>
            </div>
          </div>
          <ProjectsSection
            variant="strip"
            onShowAll={() => setProjectsOpen(true)}
            className="flex md:hidden col-span-1 row-span-1 border border-gray-normal rounded-3xl overflow-hidden"
          />
          <div
            className="col-span-1 row-span-1 flex flex-col gap-4
            md:col-span-6 md:row-span-2 md:grid md:grid-cols-6 xl:grid-cols-12 md:grid-rows-2 md:gap-4
          "
          >
            <div className="col-span-1 row-span-1 h-fit border border-gray-normal rounded-3xl p-4 md:col-span-4 xl:col-span-6 xl:row-span-2 md:row-span-2 md:h-[calc(100%)] overflow-hidden">
              <div className="flex flex-col overflow-y-auto h-full">
                <SectionTitle icon={CodeIcon}>
                  {t("labels.technologies")}
                </SectionTitle>
                <div className="flex flex-wrap gap-2 mt-4">
                  {technologies.map((tech) => (
                    <TechBase paddings={"px-3 py-1"} key={tech}>
                      {tech}
                    </TechBase>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 row-span-2 border border-gray-normal rounded-3xl p-4 md:col-span-2 xl:col-span-3 md:row-span-2 overflow-hidden">
              <div className="flex flex-col overflow-y-auto h-full">
                <SectionTitle icon={ToolsIcon}>
                  {t("labels.tools")}
                </SectionTitle>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tools.map((tool) => (
                    <TechBase paddings={"px-3 py-1"} key={tool}>
                      {tool}
                    </TechBase>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-span-1 row-span-1 border border-gray-normal rounded-3xl p-4
              md:col-span-1 md:row-span-2 md:hidden xl:block xl:col-span-3
            "
            >
              <SectionTitle icon={LanguagesIcon}>
                {t("labels.languages")}
              </SectionTitle>
              <div className="flex flex-col gap-2 mt-4">
                {t("languages", { returnObjects: true }).map((lang) => (
                  <div key={lang.language} className="flex gap-2 items-center">
                    <div className="w-1 h-1 shrink-0 bg-primary rounded-full"></div>
                    <span className="text-white pl-2">{lang.language}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 col-span-1 row-span-1 gap-4 md:hidden xl:grid
            md:col-span-2 md:row-span-3 md:grid-cols-6 md:grid-rows-5 md:gap-4
          "
          >
            <div
              className={`col-span-1 row-span-1 border border-gray-normal rounded-3xl p-2 flex flex-col items-center justify-center ${
                isAvailable ? "bg-green-400/10" : ""
              } md:col-span-3 md:row-span-2`}
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    isAvailable ? "bg-green-500" : "bg-orange-600"
                  }`}
                ></div>
                <p
                  className={`${
                    isAvailable ? "text-green-600" : "text-orange-600"
                  }`}
                >
                  {isAvailable ? t("labels.available") : t("labels.busy")}
                </p>
              </div>
              <p className="text-gray-light text-sm text-center">
                {isAvailable ? t("labels.availableDesc") : t("labels.busyDesc")}
              </p>
            </div>
            <div className="col-span-1 row-span-1 border border-gray-normal rounded-3xl p-4 xl:p-3 2xl:p-4 md:col-span-3 md:row-span-5">
              <SectionTitle icon={PreferencesIcon}>
                {t("labels.preferences")}
              </SectionTitle>
              <div className="flex flex-col gap-2 mt-4">
                {t("preferences", { returnObjects: true }).map((preference) => (
                  <div key={preference} className="flex gap-2 items-center">
                    <div className="w-1 h-1 shrink-0 bg-primary rounded-full"></div>
                    <span className="text-white text-sm pl-2">
                      {preference}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex col-span-1 row-span-1 border border-gray-normal rounded-3xl overflow-hidden  items-center justify-center md:col-span-3 md:row-span-3">
              <Donut />
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border border-gray-normal rounded-3xl p-4
            md:col-span-4 md:row-span-3 xl:col-span-2 2xl:col-span-3 xl:row-span-3
          "
          >
            <SectionTitle icon={ExperienceIcon}>
              {t("labels.experiences")}
            </SectionTitle>
            <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-x-4 content-start">
              {t("experiences", { returnObjects: true }).map((exp) => (
                <div
                  key={exp.company}
                  className="mb-2 border-l-2 border-primary p-2 text-sm"
                >
                  <p className="text-white font-bold">{exp.position}</p>
                  <p className="text-gray-light">{exp.company}</p>
                  <p className="text-gray-light">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 border border-gray-normal rounded-3xl p-4 bg-linear-to-br from-indigo-500/10 to-purple-500/10
            md:col-span-2 md:row-span-3 xl:col-span-2 2xl:col-span-1 xl:row-span-3
          "
          >
            <SectionTitle icon={StudiesIcon}>
              {t("labels.studies")}
            </SectionTitle>
            <div className="mt-4 flex flex-col overflow-y-auto h-[calc(100%-2rem)] wrap-break-word">
              {t("studies", { returnObjects: true }).map((study) => (
                <div key={study.degree} className="mb-2 text-xs">
                  <p className="text-white font-bold">{study.degree}</p>
                  <p className="text-gray-light">{study.institution}</p>
                  <p className="text-gray-light">{study.duration}</p>
                </div>
              ))}
            </div>
          </div>
          <ProjectsSection
            variant="block"
            onShowAll={() => setProjectsOpen(true)}
            className="hidden md:flex col-span-1 row-span-1 border border-gray-normal rounded-3xl md:col-span-6 md:row-span-3 xl:col-span-4 xl:row-span-3 overflow-hidden"
          />
          <div
            className="hidden col-span-1 row-span-1 border border-gray-normal rounded-3xl p-4 bg-linear-to-br from-orange-500/10 to-yellow-500/10
            md:col-span-2 md:row-span-3 md:hidden xl:block xl:col-span-2 xl:row-span-3 overflow-hidden
          "
          >
            <div className="overflow-y-auto h-full">
              <h2 className="text-white font-bold">
                {t("labels.recentReading")}
              </h2>
              <div className="flex items-center py-4 gap-3">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-30 rounded-lg"
                />
                <div className="flex flex-col ">
                  <p className="text-white text-md font-bold pb-2">
                    {book.title}
                  </p>
                  <p className="text-gray-light pb-1">{book.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="status" className="sr-only">
          {mailCopied ? t("labels.mailCopied") : ""}
        </div>
        <div
          aria-hidden="true"
          className={`fixed bg-primary text-white bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-center rounded-lg transition-all duration-500 ${
            mailCopied
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <p>{t("labels.mailCopied")}</p>
        </div>
        <ProjectsModal
          open={projectsOpen}
          onClose={() => setProjectsOpen(false)}
        />
      </div>
    </>
  );
}

export default App;
