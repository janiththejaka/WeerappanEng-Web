import { getProjectsAction } from "@/actions/project.actions";
import ProjectsTable from "@/components/admin/projects/ProjectsTable";
import Link from "next/link";

export default async function ProjectsPage() {


  const projects =
    await getProjectsAction();

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Projects
        </h1>

      </div>

      <ProjectsTable
        projects={projects}
      />

      <Link
        href="/admin/projects/new"
      >
        New Project
      </Link>

    </div>
  );
}