import { Project }
  from "@/types/project";
import Link from "next/dist/client/link";
import DeleteProjectButton from "./DeleteProjectButton";

interface Props {
  projects: Project[];
}

export default function ProjectsTable({
  projects,
}: Props) {

  return (
    <table className="w-full border">

      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Featured</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {projects.map((project) => (

          <tr key={project.id}>

            <td>{project.title}</td>

            <td>
              {project.category}
            </td>

            <td>
              {project.status}
            </td>

            <td>
              {project.featured ? "Yes" : "No"}
            </td>
            
              <td>

                <Link
                  href={`/admin/projects/${project.id}/edit`}
                >
                  Edit
                </Link>

                <DeleteProjectButton projectId={project.id} />

              </td>
            

          </tr>

        ))}

      </tbody>

    </table>
  );
}