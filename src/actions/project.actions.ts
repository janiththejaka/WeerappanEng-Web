// src/actions/project.actions.ts

"use server";

import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { createSlug } from "@/lib/utils/slug";
import { revalidatePath } from "next/cache";
import { CreateProjectDto } from "@/types/project";
import { getProjectById, getProjects } from "@/services/project.service";

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
    .insert({
      ...data,
      slug,
    })
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
