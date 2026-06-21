"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema, LoginFormData, } from "@/lib/validations/login.schema";
import { login } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const router = useRouter();

    const onSubmit = async (data: LoginFormData) => {
        try {
            await login(data.email, data.password);
            toast.success("Login successful");
            window.location.href = "/admin/dashboard";
        } catch (error) {
            toast.error("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

            <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 relative z-10">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-extrabold text-primary">
                        Admin Access
                    </h1>
                    <p className="text-slate-500 mt-2">Sign in to manage the platform</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="admin@weerappaneng.com"
                            {...register("email")}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 transition-all duration-300 outline-none"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            {...register("password")}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-3.5 text-slate-800 placeholder-slate-400 transition-all duration-300 outline-none"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 px-6 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-secondary hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Authenticating..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}