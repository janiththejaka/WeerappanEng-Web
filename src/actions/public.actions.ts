"use server";

import {
  getFeaturedProjects,
  getProjectById,
  getProjectGallery,
  getPublicProjects,
} from "@/services/public-project.service";

export async function getFeaturedProjectsAction() {
  return await getFeaturedProjects();
}

export async function getPublicProjectsAction() {
  return await getPublicProjects();
}

export async function getProjectByIdAction(id: string) {
  return await getProjectById(id);
}

export async function getProjectGalleryAction( projectId: string) {
  return await getProjectGallery(projectId);
}