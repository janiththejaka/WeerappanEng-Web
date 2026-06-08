"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData,} from "@/lib/validations/login.schema";
import { login } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();

    const onSubmit = async (
        data: LoginFormData
    ) => {
        try {
            await login(
                data.email,
                data.password
            );

            router.push(
                "/admin/dashboard"
            );
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-80"
            >
                <h1 className="text-2xl font-bold">
                    Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="border p-2"
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="border p-2"
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}

                <button
                    type="submit"
                    className="border p-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
}