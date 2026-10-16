import ProjectForm from "@/components/admin/projects/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-primary">
          Create New Project
        </h1>
        <h4 className="text-slate-500 mt-1">Fill in the details below to add a new project to your portfolio.</h4>
        <p>First add the new project from here to the project list. Afterwards you can add Images and edit the Project from edit fearture at projects list</p>
      </div>

      <ProjectForm mode="create"/>

    </div>
  );
}