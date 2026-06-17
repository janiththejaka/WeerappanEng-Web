"use client";

import {useTransition,} from "react";
import { toast } from "sonner";
import {uploadGalleryImageAction,} from "@/actions/storage.actions";

interface Props {
  projectId: string;
}

export default function GalleryUpload({projectId,}: Props) {

  const [isPending, startTransition] = useTransition();


  const handleSubmit =( formData:FormData) => {

    startTransition(async () => {
      try {
        await uploadGalleryImageAction(projectId, formData);
        toast.success(
          "Gallery image uploaded successfully"
        );
      } catch (error) {
        toast.error(
          "Failed to upload gallery image"
        );
      }
    });
  };

    return (
       
    <form action={handleSubmit}>
  <input
    type="file"
    name="file"
    accept="image/*"
  />

  <button type="submit">
    Upload Gallery Image
  </button>
</form>
  );
}