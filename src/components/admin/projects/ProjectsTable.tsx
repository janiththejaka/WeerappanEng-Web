import { Project } from "@/types/project";
import Link from "next/link";
import DeleteProjectButton from "./DeleteProjectButton";

interface Props {
  projects: Project[];
}

export default function ProjectsTable({ projects }: Props) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-semibold tracking-wide uppercase">
            <th className="px-6 py-4 rounded-tl-3xl">Title</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Featured</th>
            <th className="px-6 py-4 text-right rounded-tr-3xl">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-slate-50/80 transition-colors group">
              <td className="px-6 py-4 font-semibold text-primary">{project.title}</td>
              <td className="px-6 py-4 text-slate-600">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                  {project.category}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${project.status === "COMPLETED" ? "bg-green-50 border-green-200 text-green-700" : "bg-orange-50 border-orange-200 text-orange-600"}`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 text-slate-500 font-medium">
                {project.featured ? "Yes" : "No"}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/admin/projects/${project.id}/edit`}
                    className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    title="Edit Project"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </Link>
                  <DeleteProjectButton projectId={project.id} />
                </div>
              </td>
            </tr>
          ))}
          {projects.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                No projects found. Add one to get started!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}