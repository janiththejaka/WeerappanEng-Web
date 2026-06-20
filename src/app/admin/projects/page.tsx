import { getProjectsAction } from "@/actions/project.actions";
import ProjectsTable from "@/components/admin/projects/ProjectsTable";
import Link from "next/link";

export default async function ProjectsPage() {
  const projects = await getProjectsAction();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary">Manage Projects</h1>
          <p className="text-slate-500 mt-1">View, edit, or delete existing construction projects.</p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add New Project
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
}