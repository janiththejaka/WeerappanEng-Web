import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image Side */}
        <div className="relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/about.png" 
              alt="Engineers reviewing blueprints" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl hidden md:block">
            <p className="text-4xl font-bold text-primary mb-1">20+</p>
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Years of<br/>Excellence</p>
          </div>
        </div>

        {/* Text Side */}
        <div className="space-y-8">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">About Weerappan</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2 mb-6 leading-tight">
              Engineering the Foundation of Tomorrow.
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full" />
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            We are a premier engineering and construction firm dedicated to delivering exceptional results. From groundbreaking concepts to final project delivery, our team of experts ensures every detail is executed with precision and care.
          </p>
          
          <ul className="space-y-4 text-slate-700 font-medium">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</span>
              Innovative Design Solutions
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</span>
              Sustainable Construction Practices
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">✓</span>
              On-Time Project Delivery
            </li>
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group"
          >
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}