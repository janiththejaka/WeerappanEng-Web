import {PROJECT_STATUS} from "@/constants/projectStatus";

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  category: string;
  status: ProjectStatus;
  completion_date: string | null;
  cover_image: string | null;
  featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export type ProjectStatus = typeof PROJECT_STATUS[keyof typeof PROJECT_STATUS];

export interface CreateProjectDto {
  title: string;
  description: string;
  location: string;
  category: string;
  status: ProjectStatus;
  completion_date: string | null;
  featured: boolean;
}

export interface UpdateProjectDto extends CreateProjectDto {
  cover_image?: string | null;
  is_active?: boolean;
}


