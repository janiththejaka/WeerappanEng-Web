"use client";

import { useTransition } from "react";import { toast } from "sonner";
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
            try {
              await deleteGalleryImageAction(
                imageId
              );
              toast.success(
                "Gallery image deleted successfully"
              );
            } catch (error) {
              toast.error(
                "Failed to delete gallery image"
              );
            }
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