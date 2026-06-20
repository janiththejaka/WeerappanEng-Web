import Link from "next/link";
import StatCard from "@/components/admin/dashboard/StatCard";
import { getDashboardStatsAction, } from "@/actions/dashboard.actions";
import { getMessagesAction } from "@/actions/contact.actions";

export default async function DashboardPage() {
  const stats = await getDashboardStatsAction();
  const messages = await getMessagesAction();
  const totalMessages = messages.length;

  return (
    <div className="space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back. Here is what's happening today.</p>
        </div>
        
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Project
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
            </svg>
          )}
        />

        <StatCard
          title="Featured Projects"
          value={stats.featuredProjects}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          )}
        />

        <StatCard
          title="Ongoing Projects"
          value={stats.ongoingProjects}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}
        />

        <StatCard
          title="Completed Projects"
          value={stats.completedProjects}
          icon={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          )}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Messages Widget */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Inbox Overview</h3>
              <p className="text-sm text-slate-500">Customer inquiries and messages</p>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center py-6">
            <p className="text-5xl font-extrabold text-primary mb-2">{totalMessages}</p>
            <p className="text-slate-500 font-medium">Total Received</p>
          </div>

          <Link
            href="/admin/messages"
            className="w-full text-center py-3 bg-slate-50 hover:bg-primary hover:text-white text-primary font-semibold rounded-xl transition-colors duration-300 border border-slate-100 hover:border-primary"
          >
            View All Messages
          </Link>
        </div>

        {/* Quick Actions Widget */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
           <div>
             <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h3>
             <div className="space-y-4">
               <Link href="/admin/projects" className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-secondary hover:shadow-md transition-all group">
                 <div className="w-10 h-10 rounded-lg bg-slate-50 group-hover:bg-secondary/10 flex items-center justify-center text-slate-400 group-hover:text-secondary transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                 </div>
                 <div className="flex-1">
                   <p className="font-semibold text-slate-700 group-hover:text-secondary transition-colors">Manage All Projects</p>
                 </div>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-300 group-hover:text-secondary"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
               </Link>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}