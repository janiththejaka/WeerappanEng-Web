import { Metadata }from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Weerappan Engineering",
  description: "Engineering, Design and Construction Services",
};

export default function AboutPage() {
  return (
    <section className="bg-white min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-6 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[20%] left-[-10%] w-[40%] h-[150%] rounded-full bg-secondary blur-[100px]" />
         </div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
            <p className="text-slate-300 text-lg">Engineering excellence and sustainable solutions for a better tomorrow.</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">A Legacy of Building the Future.</h2>
              <div className="w-20 h-1 bg-secondary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                We provide engineering, design and construction solutions from concept to project delivery. Our commitment to excellence is reflected in every structure we build.
              </p>
              <p>
                Our expertise spans water supply systems, infrastructure, buildings, and road development projects. We tackle complex challenges with innovative engineering.
              </p>
              <p>
                We are committed to delivering sustainable, high-quality projects that create long-term value for communities and clients alike.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
               <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-2">50+</h4>
                  <p className="text-slate-500 font-medium">Projects Completed</p>
               </div>
               <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-2">15+</h4>
                  <p className="text-slate-500 font-medium">Years Experience</p>
               </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
               <Image src="/about.png" alt="Our Team" fill className="object-cover" />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl hidden md:block border border-slate-50">
               <div className="bg-primary text-white p-8 rounded-2xl text-center">
                 <p className="text-sm font-semibold tracking-widest uppercase mb-1">Trusted By</p>
                 <p className="text-3xl font-bold">100+ Clients</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}