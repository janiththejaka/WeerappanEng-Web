import PortfolioClient from "@/components/public/portfolio/PortfolioClient";
import { getPublicProjectsAction } from "@/actions/public.actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Weerappan Engineering",
  description: "Engineering, Design and Construction Services",
};

export default async function PortfolioPage() {
  const projects = await getPublicProjectsAction();

  return (
    <section className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-6 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-30%] left-[40%] w-[30%] h-[150%] rounded-full bg-secondary blur-[100px]" />
         </div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Portfolio</h1>
            <p className="text-slate-300 text-lg">A showcase of our commitment to quality, innovation, and sustainable building.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <PortfolioClient projects={projects} />
      </div>
    </section>
  );
}