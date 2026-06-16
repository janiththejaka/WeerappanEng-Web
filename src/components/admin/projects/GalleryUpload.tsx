"use client";

import {useTransition,} from "react";
import {uploadGalleryImageAction,} from "@/actions/storage.actions";

interface Props {
  projectId: string;
}

export default function GalleryUpload({projectId,}: Props) {

  const [isPending, startTransition] = useTransition();


  const handleSubmit =( formData:FormData) => {

    startTransition(async () => {await uploadGalleryImageAction(projectId, formData);});
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