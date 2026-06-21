"use client";

export default function AdminError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div
      className="
      min-h-[60vh]
      flex
      flex-col
      items-center
      justify-center
      gap-4
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Admin Error
      </h1>

      <button
        onClick={() => reset()}
        className="
        border
        px-4
        py-2
        rounded-lg
        "
      >
        Try Again
      </button>
    </div>
  );
}