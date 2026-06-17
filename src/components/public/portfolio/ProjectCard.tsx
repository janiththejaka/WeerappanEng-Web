import Link from "next/link";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div
      className="
      border
      rounded-lg
      overflow-hidden
      "
    >
      {project.cover_image && (
        <img
          src={project.cover_image}
          alt={project.title}
          className="
          w-full
          h-60
          object-cover
          "
        />
      )}

      <div className="p-4">
        <p
          className="
          text-sm
          text-gray-500
          "
        >
          {project.category}
        </p>

        <h3
          className="
          text-xl
          font-bold
          mt-2
          "
        >
          {project.title}
        </h3>

        <p className="mt-2">
          {project.location}
        </p>

        <Link
          href={`/portfolio/${project.slug}`}
          className="
          inline-block
          mt-4
          "
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}