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
    })
    .limit(3);

  if (error) {
    throw error;
  }

  return data;
}