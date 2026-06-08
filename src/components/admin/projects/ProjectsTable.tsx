import { Project }
from "@/types/project";

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
              {project.featured
                ? "Yes"
                : "No"}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}