import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">

      <aside
        className="
        w-64
        border-r
        p-4
        "
      >
        <h2 className="font-bold text-xl">
          Admin Panel
        </h2>

        <nav
          className="
          flex
          flex-col
          gap-4
          mt-6
          "
        >
          <Link
            href="/admin/dashboard"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/projects"
          >
            Projects
          </Link>
          <LogoutButton />
        </nav>
      </aside>

      <main
        className="
        flex-1
        p-6
        "
      >
        {children}
      </main>

    </div>
  );
}