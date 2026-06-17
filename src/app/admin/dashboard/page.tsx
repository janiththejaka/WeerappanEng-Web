import Link from "next/link";
import StatCard from "@/components/admin/dashboard/StatCard";

import {getDashboardStatsAction,} from "@/actions/dashboard.actions";

export default async function DashboardPage() {
  const stats = await getDashboardStatsAction();

  return (
    <div>

      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Dashboard
      </h1>

      <div
        className="
        grid
        md:grid-cols-4
        gap-4
        "
      >
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
        />

        <StatCard
          title="Featured Projects"
          value={stats.featuredProjects}
        />

        <StatCard
          title="Ongoing Projects"
          value={stats.ongoingProjects}
        />

        <StatCard
          title="Completed Projects"
          value={stats.completedProjects}
        />
      </div>

      <div className="mt-8">
        <Link
          href="/admin/projects"
          className="
          border
          px-4
          py-2
          inline-block
          "
        >
          Manage Projects
        </Link>
      </div>

    </div>
  );
}