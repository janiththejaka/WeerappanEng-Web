import { createClient } from "@/lib/supabase/server";

export async function getProjectImages(
  projectId: string
) {
  const supabase = await createClient();

  const { data, error } =
    await supabase
      .from("project_images")
      .select("*")
      .eq("project_id", projectId)
      .order("display_order", {
        ascending: true,
      });

  if (error) {
    throw error;
  }

  return data;
}