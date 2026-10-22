import { useEffect, useId, useRef } from "react";
import ProjectCard from "./ProjectCard";
import CloseIcon from "../assets/icons/CloseIcon";
import { getLabel, getProjects } from "./Texts";

export default function ProjectsModal({ open, onClose, language }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const projects = getProjects(language);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
      className="sheet fixed p-0 overflow-hidden border-1 border-gray-normal bg-dark text-white open:flex open:flex-col
      inset-x-0 top-auto bottom-0 mx-auto mb-0 w-full max-w-none h-[90dvh] max-h-none rounded-t-3xl border-b-0
      md:inset-0 md:m-auto md:w-[94vw] md:max-w-[1400px] xl:w-[85vw] md:h-fit md:max-h-[88dvh] md:rounded-3xl md:border-b-1 md:shadow-2xl md:shadow-black/60"
    >
      <div className="shrink-0 flex items-center justify-between gap-4 px-4 py-3 md:px-6 border-b-1 border-gray-normal">
        <h2 id={titleId} className="text-white font-bold text-lg">
          {getLabel(language, "allProjects")}{" "}
          <span className="text-gray-light font-normal">
            ({projects.length})
          </span>
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label={getLabel(language, "close")}
          title={getLabel(language, "close")}
          className="w-10 h-10 rounded-xl border-1 border-gray-normal flex items-center justify-center text-white cursor-pointer transition-colors hover:bg-primary"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </dialog>
  );
}
