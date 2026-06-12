import {getProjectByIdAction,} from "@/actions/project.actions";

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
    <div>
      Edit:
      {project.title}
    </div>
  );
}