"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  deleteProjectAction,
} from "@/actions/project.actions";

interface Props {
  projectId: string;
}

export default function DeleteProjectButton({
  projectId,
}: Props) {

  const router = useRouter();

  const [isPending, startTransition] =
    useTransition();

  const handleDelete = () => {

    const confirmed =
      window.confirm(
        "Delete this project?"
      );

    if (!confirmed) return;

    startTransition(async () => {

      try {

        await deleteProjectAction(
          projectId
        );

        toast.success(
          "Project deleted successfully"
        );

        router.refresh();

      } catch (error) {

        toast.error(
          "Failed to delete project"
        );

      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
    >
      {isPending
        ? "Deleting..."
        : "Delete"}
    </button>
  );
}