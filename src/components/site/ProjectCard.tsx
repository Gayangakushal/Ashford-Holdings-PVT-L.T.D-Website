import { AppLink, Arrow } from "@/components/site/Buttons";
import { RackingDrawing } from "@/components/site/RackingDrawing";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string | undefined;
}) {
  if (project.visual === "racking" || !project.image) {
    const height = project.scope.find((s) => /\d+\s*ft/i.test(s))?.match(/(\d+\s*ft)/i)?.[1];
    return (
      <RackingDrawing className={className} height={height} label={`${project.client} — storage`} />
    );
  }
  return (
    <img
      src={project.image.src}
      alt={project.image.alt}
      loading="lazy"
      decoding="async"
      className={cn("h-full w-full object-cover", className)}
    />
  );
}

export function ProjectCard({
  project,
  size = "md",
  className,
}: {
  project: Project;
  size?: "lg" | "md" | "wide";
  className?: string | undefined;
}) {
  return (
    <article className={cn("project-card", `project-card-${size}`, className)}>
      <AppLink href={`/projects/${project.slug}`} className="project-card-link">
        <div className="project-card-media">
          <ProjectVisual project={project} />
          {project.visual === "photo" ? (
            <span className="project-card-note">Representative image</span>
          ) : null}
        </div>
        <div className="project-card-body">
          <div className="project-card-top">
            <span className="project-card-index">P—{project.index}</span>
            <span className="t-tech">{project.discipline}</span>
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <dl className="project-card-meta">
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>{project.industry}</dd>
            </div>
            {project.location ? (
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
            ) : null}
          </dl>
          <span className="project-card-arrow" aria-hidden="true">
            <Arrow />
          </span>
        </div>
      </AppLink>
    </article>
  );
}
