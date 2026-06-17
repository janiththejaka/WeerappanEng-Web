import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/dist/client/link";

export default async function DashboardPage() {
  const supabase =
    await createClient();

  const { data: { user }, } = await supabase.auth.getUser();

  console.log( "Server User:", user );

  if (!user) { redirect("/admin/login"); }

  return (
     <div>
      <h1
        className="
        text-3xl
        font-bold
        "
      >
        Dashboard
      </h1>

      <div
        className="
        mt-8
        "
      >
        <Link
          href="/admin/projects"
          className="
          border
          px-4
          py-2
          "
        >
          Manage Projects
        </Link>
      </div>
    </div>
  );
}