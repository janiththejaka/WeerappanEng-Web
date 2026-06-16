"use server";

import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { revalidatePath } from "next/cache";

export async function uploadCoverImageAction(
  projectId: string,
  formData: FormData
) {
  await requireAdmin();

  const file = formData.get("file") as File;

  if (!file) {
    throw new Error( "No file selected");
  }

  const supabase = await createClient();

  const fileExtension = file.name.split(".").pop();

  const fileName = `${projectId}-${Date.now()}.${fileExtension}`;

  const filePath = `covers/${fileName}`;

      const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(
        filePath,
        file,
        {
          upsert: true,
        }
      );

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } =
    supabase.storage
      .from("project-images")
      .getPublicUrl(
        filePath
      );

    const { error } = await supabase
      .from("projects")
      .update({
        cover_image:
          publicUrl,
      })
      .eq("id", projectId);

  if (error) {
    throw error;
  }

  revalidatePath("/admin/projects");

  revalidatePath(`/admin/projects/${projectId}/edit`);

  return publicUrl;
}

export async function uploadGalleryImageAction(
  projectId: string,
  formData: FormData
){
  await requireAdmin();

  const file = formData.get("file") as File;

  if (!file) {
    throw new Error( "No file selected");
  }

  const supabase = await createClient();

  const fileExtension = file.name.split(".").pop();

  const fileName = `${projectId}-${Date.now()}.${fileExtension}`;

  const filePath =  `gallery/${projectId}/${fileName}`;;

      const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(
        filePath,
        file,
        {
          upsert: true,
        }
      );

  if (uploadError) {
    throw uploadError;
  }

  const {
    data: { publicUrl },
  } =
    supabase.storage
      .from("project-images")
      .getPublicUrl(
        filePath
      );

    const { error } = await supabase
  .from("project_images")
  .insert({
    project_id: projectId,
    image_url: publicUrl,
  });

  if (error) {
    throw error;
  }

  revalidatePath("/admin/projects");

  revalidatePath(`/admin/projects/${projectId}/edit`);

  return publicUrl;
}