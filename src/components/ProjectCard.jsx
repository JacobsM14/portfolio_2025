import TechBase from "./TechBase";
import ExternalLinkIcon from "../assets/icons/ExternalLinkIcon";
import GithubMarkIcon from "../assets/icons/GithubMarkIcon";

const LinkIcon = ({ label }) =>
  label === "Web" ? <ExternalLinkIcon /> : <GithubMarkIcon />;

export default function ProjectCard({
  project,
  variant = "full",
  className = "",
}) {
  if (variant === "compact") {
    return (
      <article
        className={`text-sm p-2 border-1 border-gray-normal rounded-lg ${className}`}
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white font-bold">{project.title}</h3>
          <div className="flex items-center gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — ${link.label}`}
                title={`${project.title} — ${link.label}`}
                className="text-primary flex items-center gap-1"
              >
                <LinkIcon label={link.label} />
              </a>
            ))}
          </div>
        </div>
        {/* margin, not padding: line-clamp clips at the padding edge */}
        <p className="text-gray-light my-4 line-clamp-3">{project.desc}</p>
        <div className="flex flex-wrap gap-1">
          {project.techs.map((tech) => (
            <TechBase
              paddings="px-2 py-1"
              margins="mr-1"
              texts="text-xs"
              key={tech}
            >
              {tech}
            </TechBase>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`text-sm p-3 border-1 border-gray-normal rounded-xl flex flex-col gap-3 ${className}`}
    >
      <h3 className="text-white font-bold text-base">{project.title}</h3>
      <div className="flex flex-wrap gap-1">
        {project.techs.map((tech) => (
          <TechBase paddings="px-2 py-1" texts="text-xs" key={tech}>
            {tech}
          </TechBase>
        ))}
      </div>
      <p className="text-gray-light">{project.desc}</p>
      {project.note && <p className="text-gray-light italic">{project.note}</p>}
      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${link.label}`}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full border-1 border-gray-normal text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <LinkIcon label={link.label} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
