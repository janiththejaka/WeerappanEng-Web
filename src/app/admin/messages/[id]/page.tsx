import { getMessageByIdAction } from "@/actions/contact.actions";
import MessageStatusButtons from "@/components/admin/messages/MessageStatusButtons";
import Link from "next/link";

export default async function MessageDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;
  const message = await getMessageByIdAction(id);

  return (
    <div className="max-w-4xl space-y-6">
      
      <div className="flex items-center gap-4">
        <Link href="/admin/messages" className="p-2 text-slate-400 hover:text-primary transition-colors hover:bg-primary/5 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </Link>
        <h1 className="text-3xl font-extrabold text-primary">Message Details</h1>
      </div>

      <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Sender Name</p>
            <p className="text-lg font-bold text-slate-800">{message.name}</p>
          </div>
          <div>
             <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Status</p>
             <span className={`px-3 py-1 rounded-full text-xs font-bold border inline-block ${message.status === "READ" ? "bg-slate-100 border-slate-200 text-slate-500" : "bg-secondary/10 border-secondary/20 text-secondary"}`}>
                {message.status || "UNREAD"}
             </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">Email Address</p>
            <a href={`mailto:${message.email}`} className="text-primary hover:underline font-medium">{message.email}</a>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-1">WhatsApp</p>
            <a href={`https://wa.me/${message.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer" className="text-green-600 hover:underline font-medium flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.54-4.24-7.136-7.136l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
               </svg>
               {message.whatsapp}
            </a>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
           <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Subject</p>
           <p className="font-bold text-xl text-slate-800 mb-6 pb-4 border-b border-slate-200">{message.subject}</p>
           
           <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Message</p>
           <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
             {message.message}
           </p>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <MessageStatusButtons id={message.id} />
      </div>

    </div>
  );
}