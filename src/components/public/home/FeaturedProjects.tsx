import { getFeaturedProjectsAction } from "@/actions/public.actions";
import ProjectCard from "@/components/public/portfolio/ProjectCard";
import Link from "next/link";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjectsAction();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Featured Projects</h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-full shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}