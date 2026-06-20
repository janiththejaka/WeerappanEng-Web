"use server";

import { createClient } from "@/lib/supabase/server";
import {contactSchema,} from "@/lib/validations/contact.schema";
import {getMessages, getMessageById, updateMessageStatus,} from "@/services/contact.service";
import {revalidatePath,} from "next/cache";

export async function createContactMessageAction(
  formData: FormData
) {

  const validated =
    contactSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp:
        formData.get("whatsapp"),
      subject:
        formData.get("subject"),
      message:
        formData.get("message"),
    });

  const supabase = await createClient();

  const { error } = await supabase
      .from("contact_messages")
      .insert({
        ...validated,
        status: "NEW",
      });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
  };
}

export async function getMessagesAction() {
  return await getMessages();
}

export async function getMessageByIdAction(
  id: string
) {
  return await getMessageById(id);
}

export async function updateMessageStatusAction(
  id: string,
  status:
    | "NEW"
    | "READ"
    | "REPLIED"
) {

  await updateMessageStatus(
    id,
    status
  );

  revalidatePath(
    "/admin/messages"
  );
}