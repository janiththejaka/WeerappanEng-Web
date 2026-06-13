"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

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

        router.refresh();

      } catch (error) {

        console.error(error);

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