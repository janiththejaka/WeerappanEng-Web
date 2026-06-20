"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {projectSchema,ProjectFormData,} from "@/lib/validations/project.schema";
import { PROJECT_CATEGORIES } from "@/types/projectCategories";
import { updateProjectAction,createProjectAction } from "@/actions/project.actions";
import { Project } from "@/types/project";

interface ProjectFormProps {
  mode: "create" | "edit";
  project?: Project;
}

export default function ProjectForm({ mode, project }: ProjectFormProps) {
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
      title: project?.title ?? "",
      description: project?.description ?? "",
      location: project?.location ?? "",
      category: project?.category ?? "",
      status: project?.status ?? "ONGOING",
      completion_date: project?.completion_date ?? null,
      featured: project?.featured ?? false,
    },
  });

  const selectedStatus = watch("status");

  const onSubmit = (data: ProjectFormData) => {
    startTransition(async () => {
      try {
        if (mode === "edit" && project) {
          await updateProjectAction(project.id, data);
          toast.success("Project updated successfully");
        } else {
          await createProjectAction(data);
          toast.success("Project created successfully");
        }
        router.push("/admin/projects");
        router.refresh();
      } catch (error) {
        toast.error(mode === "edit" ? "Failed to update project" : "Failed to create project");
      }
    });
  };

  const inputClass = "w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 transition-all duration-300 outline-none";
  const labelClass = "block text-sm font-semibold text-slate-700 mb-2";
  const errorClass = "text-red-500 text-sm mt-1.5 font-medium";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
      
      <div>
        <label className={labelClass}>Project Title</label>
        <input
          placeholder="e.g. Skyline Skyscraper"
          {...register("title")}
          className={inputClass}
        />
        {errors.title && <p className={errorClass}>{errors.title.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <textarea
          placeholder="Detailed description of the construction work..."
          {...register("description")}
          rows={5}
          className={inputClass}
        />
        {errors.description && <p className={errorClass}>{errors.description.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Location</label>
          <input
            placeholder="e.g. Colombo, Sri Lanka"
            {...register("location")}
            className={inputClass}
          />
          {errors.location && <p className={errorClass}>{errors.location.message}</p>}
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <select {...register("category")} className={inputClass}>
            <option value="" disabled>Select a category</option>
            {Object.values(PROJECT_CATEGORIES).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Status</label>
          <select {...register("status")} className={inputClass}>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>

        {selectedStatus === "COMPLETED" && (
          <div>
            <label className={labelClass}>Completion Date</label>
            <input
              type="date"
              {...register("completion_date")}
              className={inputClass}
            />
            {errors.completion_date && <p className={errorClass}>{errors.completion_date.message}</p>}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 mt-4">
        <input
          type="checkbox"
          id="featured"
          {...register("featured")}
          className="w-5 h-5 rounded border-slate-300 text-secondary focus:ring-secondary/20"
        />
        <label htmlFor="featured" className="font-medium text-slate-700 select-none cursor-pointer">
          Feature this project on the homepage
        </label>
      </div>

      <div className="pt-4 border-t border-slate-100 mt-4 flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? (mode === "create" ? "Creating..." : "Updating...") : (mode === "create" ? "Create Project" : "Update Project")}
        </button>
      </div>
    </form>
  );
}