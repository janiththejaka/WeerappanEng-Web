"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations/contact.schema";
import { createContactMessageAction } from "@/actions/contact.actions";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });
      await createContactMessageAction(formData);
      toast.success("Inquiry submitted successfully");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit inquiry");
    }
  };

  const inputClasses = "w-full bg-white/60 border border-white/40 focus:border-secondary focus:ring-2 focus:ring-secondary/20 rounded-xl p-4 text-slate-800 placeholder-slate-400 backdrop-blur-sm transition-all duration-300 outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input placeholder="Full Name" {...register("name")} className={inputClasses} />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.name.message}</p>}
        </div>

        <div>
          <input placeholder="Email Address" {...register("email")} className={inputClasses} />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <input placeholder="WhatsApp Number" {...register("whatsapp")} className={inputClasses} />
        {errors.whatsapp && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.whatsapp.message}</p>}
      </div>

      <div>
        <input placeholder="Subject" {...register("subject")} className={inputClasses} />
        {errors.subject && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.subject.message}</p>}
      </div>

      <div>
        <textarea rows={5} placeholder="Message" {...register("message")} className={`${inputClasses} resize-none`} />
        {errors.message && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-orange-600 hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Submitting...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </button>
    </form>
  );
}