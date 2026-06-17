"use server";

import { requireAdmin } from "@/lib/auth/requireAdmin";
import { getDashboardStats } from "@/services/dashboard.service";

export async function getDashboardStatsAction() {
  await requireAdmin();

  return await getDashboardStats();
}