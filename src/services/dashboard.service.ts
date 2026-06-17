import { createClient } from "@/lib/supabase/server";

export async function getDashboardStats() {
  const supabase = await createClient();

  const [
    totalProjects,
    featuredProjects,
    ongoingProjects,
    completedProjects,
  ] = await Promise.all([
    supabase
      .from("projects")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("featured", true),

    supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("status", "ONGOING"),

    supabase
      .from("projects")
      .select("*", { count: "exact", head: true })
      .eq("status", "COMPLETED"),
  ]);

  return {
    totalProjects:
      totalProjects.count ?? 0,

    featuredProjects:
      featuredProjects.count ?? 0,

    ongoingProjects:
      ongoingProjects.count ?? 0,

    completedProjects:
      completedProjects.count ?? 0,
  };
}