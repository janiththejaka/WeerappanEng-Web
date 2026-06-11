import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function DashboardPage() {
  const supabase =
    await createClient();

  const { data: { user }, } = await supabase.auth.getUser();

  console.log( "Server User:", user );

  if (!user) { redirect("/admin/login"); }

  return (
    <div>
      Dashboard
      <p>{user.email}</p>
        <LogoutButton />
    </div>
  );
}