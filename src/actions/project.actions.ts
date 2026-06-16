// src/actions/project.actions.ts

"use server";

import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { createSlug } from "@/lib/utils/slug";
import { revalidatePath } from "next/cache";
import { CreateProjectDto } from "@/types/project";
import { getProjectById, getProjects } from "@/services/project.service";
import { getProjectImages } from "@/services/project-image.service";

export async function getProjectsAction() {
  await requireAdmin();

  return await getProjects();
}

export async function createProjectAction(
  data: CreateProjectDto
) {
  await requireAdmin();

  const supabase = await createClient();

  const slug = createSlug(data.title);

  const { data: project, error } = await supabase
    .from("projects")
    .insert({ ...data, slug,})
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");

  return project;
}

export async function getProjectByIdAction(
  id: string
) {
  await requireAdmin();

  return await getProjectById(id);
}

export async function updateProjectAction(
  id: string,
  data: CreateProjectDto
) {
  await requireAdmin();

  const supabase = await createClient();

  const slug = createSlug(data.title);

  const { error } =
    await supabase
      .from("projects")
      .update({...data, slug,})
      .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");

  revalidatePath(
    `/admin/projects/${id}/edit`
  );
}

export async function deleteProjectAction(
  id: string
) {
  await requireAdmin();

  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("projects")
      .delete()
      .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/admin/projects");
}

export async function getProjectImagesAction(
  projectId: string
) {
  await requireAdmin();

  return await getProjectImages(
    projectId
  );
}
