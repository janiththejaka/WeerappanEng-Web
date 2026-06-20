import Link from "next/link";
import { getMessagesAction } from "@/actions/contact.actions";

export default async function MessagesPage() {
  const messages = await getMessagesAction();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-primary">Messages</h1>
        <p className="text-slate-500 mt-1">Review and respond to inquiries from your website visitors.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-semibold tracking-wide uppercase">
                <th className="px-6 py-4 rounded-tl-3xl">Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right rounded-tr-3xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {messages?.map((message) => (
                <tr key={message.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4 font-semibold text-primary">{message.name}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">
                    <div className="flex flex-col gap-1">
                      <span>{message.email}</span>
                      <span className="text-slate-400">{message.whatsapp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${message.status === "READ" ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-secondary/10 border-secondary/20 text-secondary"}`}>
                      {message.status || "UNREAD"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm">
                    {new Date(message.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/admin/messages/${message.id}`}
                      className="inline-flex px-4 py-2 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-lg text-sm font-bold transition-colors"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {(!messages || messages.length === 0) && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No messages yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}