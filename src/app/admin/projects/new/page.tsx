import ProjectForm from "@/components/admin/projects/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-primary">
          Create New Project
        </h1>
        <p className="text-slate-500 mt-1">Fill in the details below to add a new project to your portfolio.</p>
      </div>

      <ProjectForm mode="create"/>

    </div>
  );
}