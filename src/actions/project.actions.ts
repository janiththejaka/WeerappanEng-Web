"use server";

import { getProjects } from "@/services/project.service";

export async function getProjectsAction() {
  return await getProjects();
}