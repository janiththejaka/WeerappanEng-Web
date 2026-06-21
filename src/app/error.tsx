"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      gap-6
      px-6
      text-center
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        "
      >
        Something went wrong
      </h1>

      <p
        className="
        text-gray-600
        max-w-md
        "
      >
        An unexpected error occurred.
        Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="
        border
        px-6
        py-3
        rounded-lg
        "
      >
        Try Again
      </button>
    </div>
  );
}