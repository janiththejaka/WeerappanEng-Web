"use server";

import { getProjects } from "@/services/project.service";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { createSlug } from "@/lib/utils/slug";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateProjectDto } from "@/types/project";

export async function getProjectsAction() {
  return await getProjects();
}
export async function createProjectAction(
  data: CreateProjectDto
) {
  await requireAdmin();

  const supabase =
    await createClient();

  const slug = createSlug(
    data.title
  );

  const { error } =
    await supabase
      .from("projects")
      .insert({
        ...data,
        slug,
      });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(
    "/admin/projects"
  );

  redirect("/admin/projects");
}