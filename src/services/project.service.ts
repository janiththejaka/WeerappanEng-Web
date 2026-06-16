import { createClient } from "@/lib/supabase/server";
import {CreateProjectDto,} from "@/types/project";

export async function getProjects() {
  const supabase = await createClient();
  const { data, error } =
    await supabase
      .from("projects")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

  if (error) throw error;

  return data;
}

export async function createProject(
  payload: CreateProjectDto & {
    slug: string;
  }
) {
    const supabase = await createClient();
  const { data, error } =
    await supabase
      .from("projects")
      .insert(payload)
      .select()
      .single();

  if (error) throw error;

  return data;
}

export async function getProjectById(
  id: string
) {
  const supabase = await createClient();
  const { data, error } =
    await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

  if (error) {
    throw error;
  }

  return data;
}