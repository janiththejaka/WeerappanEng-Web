"use client";

import {
    useForm,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import {
    projectSchema,
    ProjectFormData,
} from "@/lib/validations/project.schema";
import { PROJECT_CATEGORIES } from "@/types/projectCategories";

export default function ProjectForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProjectFormData>({
        resolver:
            zodResolver(projectSchema),
    });

    const onSubmit = async (
        data: ProjectFormData
    ) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(
                onSubmit
            )}
            className="space-y-4"
        >

            <input {...register("title")} />
            <textarea {...register("description")} />
            <input {...register("location")} />
            <select {...register("category")}>
                {Object.values(PROJECT_CATEGORIES).map((category) => (
                    <option key={category} value={category} >
                        {category}
                    </option>
                ))}
            </select>
            <select {...register("status")}>
                <option value="ONGOING"> Ongoing </option>
                <option value="COMPLETED"> Completed </option>
            </select>
            <input type="checkbox"{...register("featured")} />

        </form>
    );
}