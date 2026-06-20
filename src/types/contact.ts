export const CONTACT_STATUS = {
  NEW: "NEW",
  READ: "READ",
  REPLIED: "REPLIED",
} as const;

export type ContactStatus =
  typeof CONTACT_STATUS[keyof typeof CONTACT_STATUS];

export interface ContactMessage {
  id: string;

  name: string;

  email: string;

  whatsapp: string;

  subject: string;

  message: string;

  status: ContactStatus;

  created_at: string;
}