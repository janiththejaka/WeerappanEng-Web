export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  category: string;
  status: "ONGOING" | "COMPLETED";
  completion_date: string | null;
  cover_image: string | null;
  featured: boolean;
  is_active: boolean;
  created_at: string;
}