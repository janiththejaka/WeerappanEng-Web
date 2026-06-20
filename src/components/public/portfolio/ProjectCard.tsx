import Link from "next/link";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  // Using placeholder image since real data might not have URLs yet for our demo
  const imageUrl = project.cover_image || "/project.png";

  return (
    <div className="group border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col relative transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative bg-white">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {project.location}
        </div>

        <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
          {project.title}
        </h3>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Status</span>
            <span className={`font-semibold ${project.status === 'COMPLETED' ? 'text-green-600' : 'text-orange-500'}`}>
              {project.status}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm pt-3 border-t border-slate-100">
            <span className="text-slate-500">Completed</span>
            <span className="font-medium text-slate-700">
               {project.status === "COMPLETED" && project.completion_date ? project.completion_date : "Ongoing"}
            </span>
          </div>

          <Link
            href={`/portfolio/${project.id}`}
            className="mt-6 flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-primary font-semibold rounded-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}