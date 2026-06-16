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
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Edit Project
      </h1>

      <ProjectForm mode="edit" project={project} />

      <hr className="my-8" />

      <h2>
        Cover Image
      </h2>

      <CoverImageUpload
        projectId={project.id}
        currentImage={project.cover_image}
      />

      <hr className="my-8" />

      <h2 className="text-2xl font-bold">
        Gallery Images
      </h2>

      <GalleryUpload projectId={project.id}/>

      <GalleryImages images={images}/>
    </div>
  );
}