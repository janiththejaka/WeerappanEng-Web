import { supabase }
from "@/lib/supabase/client";

import {
  CreateProjectDto,
} from "@/types/project";

export async function getProjects() {
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
  const { data, error } =
    await supabase
      .from("projects")
      .insert(payload)
      .select()
      .single();

  if (error) throw error;

  return data;
}