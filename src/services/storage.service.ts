import { createClient } from "@/lib/supabase/server";

export async function uploadProjectImage(file: File, path: string) {
  const supabase = await createClient();

  const { error } = await supabase.storage
      .from("project-images")
      .upload(path, file, {
        upsert: true,
      });

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("project-images")
    .getPublicUrl(path);

  return publicUrl;
}