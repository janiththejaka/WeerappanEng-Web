import {
  getFeaturedProjectsAction,
} from "@/actions/public.actions";

import ProjectCard from
"@/components/public/portfolio/ProjectCard";

export default async function FeaturedProjects() {
  const projects =
    await getFeaturedProjectsAction();

  return (
    <section
      className="
      py-24
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <h2
          className="
          text-4xl
          font-bold
          mb-10
          "
        >
          Featured Projects
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}