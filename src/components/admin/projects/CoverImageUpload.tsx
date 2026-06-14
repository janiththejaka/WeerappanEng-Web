"use client";

import {useTransition,} from "react";
import {uploadCoverImageAction,} from "@/actions/storage.actions";

interface Props {
  projectId: string;
}

export default function CoverImageUpload({projectId,}: Props) {

  const [isPending, startTransition] = useTransition();

  const handleSubmit =( formData:FormData) => {

    startTransition(async () => {await uploadCoverImageAction(projectId, formData);});
  };

    return (
    <form action={handleSubmit} className="space-y-4">
    <input
        type="file"
        name="file"
        accept="image/*"
      />

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