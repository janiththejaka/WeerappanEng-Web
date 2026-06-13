import ProjectForm from "@/components/admin/projects/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Create Project
      </h1>

      <ProjectForm mode="create"/>

    </div>
  );
}