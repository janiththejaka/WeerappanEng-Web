import { getProjectByIdAction, getProjectImagesAction, } from "@/actions/project.actions";
import CoverImageUpload from "@/components/admin/projects/CoverImageUpload";
import ProjectForm from "@/components/admin/projects/ProjectForm";
import GalleryUpload from "@/components/admin/projects/GalleryUpload";
import GalleryImages from "@/components/admin/projects/GalleryImages";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;
  const project = await getProjectByIdAction(id);
  const images = await getProjectImagesAction(id);

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-primary">
          Edit Project: {project.title}
        </h1>
        <p className="text-slate-500 mt-1">Update project details, cover image, and gallery below.</p>
      </div>

      <ProjectForm mode="edit" project={project} />

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">
          Cover Image
        </h2>
        <CoverImageUpload
          projectId={project.id}
          currentImage={project.cover_image}
        />
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">
          Gallery Images
        </h2>
        <div className="mb-8">
          <GalleryUpload projectId={project.id}/>
        </div>
        <GalleryImages images={images}/>
      </div>
    </div>
  );
}