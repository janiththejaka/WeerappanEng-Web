import { createClient }from "@/lib/supabase/server";

export async function getMessages() {

  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("contact_messages")
      .select("*")
      .order(
        "created_at",
        {
          ascending: false,
        }
      );

  if (error) {
    throw error;
  }

  return data;
}

export async function getMessageById(
  id: string
) {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("contact_messages")
      .select("*")
      .eq("id", id)
      .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateMessageStatus(
  id: string,
  status:
    | "NEW"
    | "READ"
    | "REPLIED"
) {
  const supabase =
    await createClient();

  const { error } =
    await supabase
      .from("contact_messages")
      .update({
        status,
      })
      .eq("id", id);

  if (error) {
    throw error;
  }
}