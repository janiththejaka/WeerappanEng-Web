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
  validateImage(file);

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
  validateImage(file);

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

function validateImage(file: File) {
  if (!file || file.size === 0) {
    throw new Error(
      "Please select an image."
    );
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (
    !allowedTypes.includes(file.type)
  ) {
    throw new Error(
      "Only JPG, PNG and WEBP images are allowed."
    );
  }

  const MAX_SIZE =
    5 * 1024 * 1024;

  if (file.size > MAX_SIZE) {
    throw new Error(
      "Image must be under 5MB."
    );
  }
}