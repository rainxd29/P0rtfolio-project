// @ts-nocheck
import ProjectCard from "@/components/features/projects/ProjectCard";

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}