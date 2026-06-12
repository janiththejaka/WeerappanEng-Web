"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {projectSchema,ProjectFormData,} from "@/lib/validations/project.schema";
import { PROJECT_CATEGORIES } from "@/types/projectCategories";
import { createProjectAction } from "@/actions/project.actions";

export default function ProjectForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),

    defaultValues: {
      featured: false,
      status: "ONGOING",
      completion_date: null,
    },
  });

  const selectedStatus =
    watch("status");

  const onSubmit = (
    data: ProjectFormData
  ) => {
    startTransition(async () => {
      try {
        await createProjectAction(data);

        router.push(
          "/admin/projects"
        );

        router.refresh();
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-3xl"
    >
      <div>
        <label>Title</label>

        <input
          {...register("title")}
          className="border p-2 w-full"
        />

        {errors.title && (
          <p>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Description</label>

        <textarea
          {...register("description")}
          rows={6}
          className="border p-2 w-full"
        />

        {errors.description && (
          <p>{errors.description.message}</p>
        )}
      </div>

      <div>
        <label>Location</label>

        <input
          {...register("location")}
          className="border p-2 w-full"
        />

        {errors.location && (
          <p>{errors.location.message}</p>
        )}
      </div>

      <div>
        <label>Category</label>

        <select
          {...register("category")}
          className="border p-2 w-full"
        >
          {Object.values(
            PROJECT_CATEGORIES
          ).map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Status</label>

        <select
          {...register("status")}
          className="border p-2 w-full"
        >
          <option value="ONGOING">
            Ongoing
          </option>

          <option value="COMPLETED">
            Completed
          </option>
        </select>
      </div>

      {selectedStatus ===
        "COMPLETED" && (
        <div>
          <label>
            Completion Date
          </label>

          <input
            type="date"
            {...register(
              "completion_date"
            )}
            className="border p-2 w-full"
          />

          {errors.completion_date && (
            <p>
              {
                errors
                  .completion_date
                  .message
              }
            </p>
          )}
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="checkbox"
          {...register("featured")}
        />

        <label>
          Feature on Homepage
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="border px-4 py-2"
      >
        {isPending
          ? "Creating..."
          : "Create Project"}
      </button>
    </form>
  );
}