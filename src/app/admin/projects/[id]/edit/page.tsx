import { getProjectByIdAction, } from "@/actions/project.actions";
import CoverImageUpload from "@/components/admin/projects/CoverImageUpload";
import ProjectForm from "@/components/admin/projects/ProjectForm";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  const project =
    await getProjectByIdAction(
      id
    );

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

      <CoverImageUpload projectId={project.id} />

    </div>
  );
}