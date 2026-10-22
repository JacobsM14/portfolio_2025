import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectsIcon from "../assets/icons/ProjectsIcon";
import GridIcon from "../assets/icons/GridIcon";
import { getLabel, getProjects } from "./Texts";

export default function ProjectsSection({
  language,
  onShowAll,
  variant = "block",
  className = "",
}) {
  const isStrip = variant === "strip";
  const projects = getProjects(language);
  const featured = projects.filter((project) => project.featured);

  return (
    <div className={className}>
      <div className="flex flex-col overflow-y-auto h-full w-full">
        <SectionTitle icon={ProjectsIcon} className="pl-2 pt-2">
          {getLabel(language, "projects")}
        </SectionTitle>
        <div
          className={
            isStrip
              ? "flex w-full overflow-x-auto gap-4 p-3"
              : "flex flex-1 w-full gap-4 p-3"
          }
        >
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="compact"
              className={isStrip ? "w-64 shrink-0" : "flex-1 min-w-0"}
            />
          ))}
          <button
            type="button"
            onClick={onShowAll}
            aria-haspopup="dialog"
            className="w-28 shrink-0 p-2 rounded-lg border-1 border-dashed border-gray-normal text-primary text-sm font-bold text-center flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors hover:border-primary hover:bg-primary/10"
          >
            <GridIcon />
            <span>{getLabel(language, "seeAllProjects")}</span>
            <span className="text-gray-light font-normal">
              ({projects.length})
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
