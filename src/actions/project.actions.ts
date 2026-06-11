"use server";

import { getProjects } from "@/services/project.service";
import { createClient }from "@/lib/supabase/server";

export async function getProjectsAction() {
  return await getProjects();
}
export async function createProjectAction() {

}