"use client";

import {useTransition,} from "react";
import { toast } from "sonner";
import {uploadCoverImageAction,} from "@/actions/storage.actions";

interface Props {
  projectId: string;
  currentImage?: string | null;
}

export default function CoverImageUpload({projectId, currentImage}: Props) {

  const [isPending, startTransition] = useTransition();


  const handleSubmit =(formData:FormData) => {

    startTransition(async () => {
      try {
        await uploadCoverImageAction(projectId, formData);
        toast.success(
          "Cover image uploaded successfully"
        );
      } catch (error) {
        toast.error(
          "Failed to upload cover image"
        );
      }
    });
  };

    return (
       
    <form action={handleSubmit} className="space-y-4" >
    <input
        type="file"
        name="file"
        accept="image/*"
      />
      {currentImage && (
  <div className="mb-4">
    <img
      src={currentImage}
      alt="Cover Image"
      className="w-64 h-40 object-cover rounded"
    />
  </div>
)}

      <button type="submit">
        {
          isPending
          ? "Uploading..."
          : "Upload Cover"
        }
      </button>

    </form>
  );
}