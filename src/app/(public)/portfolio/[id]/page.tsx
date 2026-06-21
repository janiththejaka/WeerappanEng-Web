import {getProjectByIdAction, getProjectGalleryAction} from "@/actions/public.actions";
import { notFound } from "next/navigation";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const project = await getProjectByIdAction(id);

  if (!project) {
    notFound();
  }

  const gallery = await getProjectGalleryAction(project.id);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen">
      {project.cover_image && (
        <div className="relative w-full h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl mb-16">
          <img
            src={project.cover_image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="w-full max-w-4xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-8">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-24 border-y border-slate-200 py-10 bg-slate-50/50 rounded-3xl px-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">Status</span>
          <p className="text-xl font-bold text-primary">{project.status}</p>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">Category</span>
          <p className="text-xl font-bold text-primary">{project.category}</p>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-start border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">Location</span>
          <p className="text-xl font-bold text-primary">{project.location}</p>
        </div>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-extrabold text-primary">Project Gallery</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-secondary/50 to-transparent rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map(image => (
              <div key={image.id} className="relative group rounded-[2rem] overflow-hidden shadow-lg h-80 bg-slate-100">
                <img
                  src={image.image_url}
                  alt={`Gallery image for ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}