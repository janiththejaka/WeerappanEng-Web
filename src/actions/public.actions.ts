"use server";

import {
  getFeaturedProjects,
} from "@/services/public-project.service";

export async function getFeaturedProjectsAction() {
  return await getFeaturedProjects();
}