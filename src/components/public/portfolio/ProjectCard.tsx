import Link from "next/link";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <div className="
    border
    border-gray-200
    rounded-xl
    overflow-hidden
    shadow-sm
    bg-white
    h-full
    flex
    flex-col
  ">

      {project.cover_image ? (
        <img
          src={project.cover_image}
          alt={project.title}
          className="
      w-full
      h-40
      object-cover
    "
        />
      ) : (
        <div
          className="
      w-full
      h-40
      bg-gray-200
    "
        />
      )}

      <p className="text-sm text-gray-500">
        {project.category}
      </p>

      <h3 className="text-xl font-bold mt-2">
        {project.title}
      </h3>

      <p className="mt-2">
        📍 {project.location}
      </p>

      <p className="mt-2">
        Status:
        {" "}
        {project.status}
      </p>

      <div className="mt-1 min-h-[24px]">
  {project.status === "COMPLETED" &&
    project.completion_date ? (
      <p>
        Completed:
        {" "}
        {project.completion_date}
      </p>
    ) : (
      <p className="text-gray-500">
        Coming Soon...
      </p>
    )}
</div>

      <Link
        href={`/portfolio/${project.id}`}
        className="
      inline-block
      mt-4
      border
      px-4
      py-2
    "
      >
        View Project
      </Link>

    </div>
  );
}