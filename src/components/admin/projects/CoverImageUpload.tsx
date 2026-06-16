"use client";

import {useTransition,} from "react";
import {uploadCoverImageAction,} from "@/actions/storage.actions";

interface Props {
  projectId: string;
  currentImage?: string | null;
}

export default function CoverImageUpload({projectId, currentImage}: Props) {

  const [isPending, startTransition] = useTransition();


  const handleSubmit =(formData:FormData) => {

    startTransition(async () => {await uploadCoverImageAction(projectId, formData);});
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