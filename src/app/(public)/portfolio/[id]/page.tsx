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
    <section
      className="
      max-w-6xl
      mx-auto
      px-6
      py-20
      "
    >
      {project.cover_image && (
        <img
          src={project.cover_image}
          alt={project.title}
          className="
          w-full
          h-[400px]
          object-cover
          rounded-xl
          "
        />
      )}

      <h1
        className="
        text-5xl
        font-bold
        mt-10
        "
      >
        {project.title}
      </h1>

      <p
        className="
        mt-4
        text-gray-500
        "
      >
        {project.location}
      </p>

      <div
        className="
        mt-8
        "
      >
        {project.description}
      </div>
      <div
  className="
  grid
  md:grid-cols-3
  gap-4
  mt-12
  "
>
    <div
  className="
  grid
  md:grid-cols-3
  gap-6
  mt-8
  "
>

  <div className="border p-4 rounded-lg">
    <h3>Status</h3>
    <p>{project.status}</p>
  </div>

  <div className="border p-4 rounded-lg">
    <h3>Category</h3>
    <p>{project.category}</p>
  </div>

  <div className="border p-4 rounded-lg">
    <h3>Location</h3>
    <p>{project.location}</p>
  </div>

</div>
  {gallery.map(image => (
    <img
      key={image.id}
      src={image.image_url}
      alt=""
      className="
      h-64
      w-full
      object-cover
      rounded-lg
      "
    />
  ))}
</div>
    </section>
  );
}