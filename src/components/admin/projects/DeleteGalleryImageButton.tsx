"use client";

import { useTransition } from "react";

import {deleteGalleryImageAction,} from "@/actions/storage.actions";

interface Props {
  imageId: string;
}

export default function DeleteGalleryImageButton({
  imageId,
}: Props) {
  const [
    isPending,
    startTransition,
  ] = useTransition();

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() =>
        startTransition(
          async () => {
            await deleteGalleryImageAction(
              imageId
            );
          }
        )
      }
    >
      {
        isPending
          ? "Deleting..."
          : "Delete"
      }
    </button>
  );
}