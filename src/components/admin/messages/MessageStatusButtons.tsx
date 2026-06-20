"use client";

import {updateMessageStatusAction,} from "@/actions/contact.actions";
import { toast } from "sonner";

export default function MessageStatusButtons({
  id,
}: {
  id: string;
}) {

  async function updateStatus(
    status:
      | "READ"
      | "REPLIED"
  ) {
    try {

      await updateMessageStatusAction(
        id,
        status
      );

      toast.success(
        "Status Updated"
      );

    } catch {

      toast.error(
        "Failed To Update"
      );

    }
  }

  return (
    <div
      className="
      flex
      gap-4
      "
    >
      <button
        onClick={() =>
          updateStatus("READ")
        }
        className="
        border
        px-4
        py-2
        rounded-lg
        "
      >
        Mark Read
      </button>

      <button
        onClick={() =>
          updateStatus("REPLIED")
        }
        className="
        border
        px-4
        py-2
        rounded-lg
        "
      >
        Mark Replied
      </button>
    </div>
  );
}