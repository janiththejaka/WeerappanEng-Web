import { supabase } from "@/lib/supabase/client";

export async function getProjectImages(
  projectId: string
) {
  const { data, error } = await supabase
      .from("project_images")
      .select("*")
      .eq("project_id", projectId)
      .order(
        "display_order",
        {
          ascending: true,
        }
      );

  if (error) {
    throw error;
  }

  return data;
}