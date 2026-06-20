"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {contactSchema,ContactFormData,} from "@/lib/validations/contact.schema";

import { createContactMessageAction } from "@/actions/contact.actions";

import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver:
      zodResolver(contactSchema),
  });

  const onSubmit = async (
    data: ContactFormData
  ) => {
    try {
      const formData =
        new FormData();

      Object.entries(data).forEach(
        ([key, value]) => {
          formData.append(
            key,
            value ?? ""
          );
        }
      );

      await createContactMessageAction(
        formData
      );

      toast.success(
        "Inquiry submitted successfully"
      );

      reset();

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to submit inquiry"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-4"
    >
      <div>
        <input
          placeholder="Full Name"
          {...register("name")}
          className="border p-3 w-full rounded-lg"
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Email Address"
          {...register("email")}
          className="border p-3 w-full rounded-lg"
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="WhatsApp Number"
          {...register("whatsapp")}
          className="border p-3 w-full rounded-lg"
        />

        {errors.whatsapp && (
          <p className="text-red-500 text-sm mt-1">
            {errors.whatsapp.message}
          </p>
        )}
      </div>

      <div>
        <input
          placeholder="Subject"
          {...register("subject")}
          className="border p-3 w-full rounded-lg"
        />

        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <textarea
          rows={6}
          placeholder="Message"
          {...register("message")}
          className="border p-3 w-full rounded-lg"
        />

        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          border
          px-6
          py-3
          rounded-lg
          w-full
        "
      >
        {isSubmitting
          ? "Submitting..."
          : "Send Inquiry"}
      </button>
    </form>
  );
}