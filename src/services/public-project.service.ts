import { createClient } from "@/lib/supabase/server";

export async function getFeaturedProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured", true)
    .eq("is_active", true)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
}

export async function getPublicProjects() {
  const supabase = await createClient();

  const { data, error } =
    await supabase
      .from("projects")
      .select("*")
      .eq("is_active", true)
      .order("created_at", {
        ascending: false,
      });

  if (error) {
    throw error;
  }

  return data;
}

export async function getProjectById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .eq("is_active", true)
      .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getProjectGallery(projectId: string) {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("project_images")
      .select("*")
      .eq("project_id", projectId);

  if (error) {
    throw error;
  }

  return data;
}