import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Weerappan Engineering",
  description: "Engineering, Design and Construction Services",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Engineering",
      description: "Comprehensive planning, technical design, and structural engineering consultancy to ensure project feasibility and integrity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      )
    },
    {
      title: "Design",
      description: "Innovative architectural and infrastructure design solutions that blend aesthetics with practical functionality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.813-3.814a1.125 1.125 0 0 0-1.59-1.59l-3.814 3.813m-7.432 2.475a15.241 15.241 0 0 1-.992-4.397 4.5 4.5 0 0 1 8.423-2.965l-1.073 1.418a3 3 0 0 0-4.526 4.526l1.418-1.073ZM12 22.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        </svg>
      )
    },
    {
      title: "Construction",
      description: "End-to-end project execution, delivering high-quality construction on time and within budget, adhering to the highest safety standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
  ];

  return (
    <section className="bg-slate-50 min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-6 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[150%] rounded-full bg-secondary blur-[100px]" />
         </div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
            <p className="text-slate-300 text-lg">Delivering precision and excellence across all phases of your project.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white rounded-3xl p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
           <h3 className="text-3xl font-bold text-primary mb-6">Need a Custom Solution?</h3>
           <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
             Every project is unique. We tailor our engineering and construction services to meet your specific requirements and vision. Let's discuss how we can help.
           </p>
           <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
             Contact Our Experts
           </Link>
        </div>
      </div>
    </section>
  );
}