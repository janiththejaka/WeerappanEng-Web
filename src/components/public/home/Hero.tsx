import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Modern construction site" 
          fill 
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10 md:mt-0">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 glass-dark p-8 md:p-12 rounded-2xl">
          <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
            Engineering • Design • Construction
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Building Sustainable <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
              Infrastructure
            </span> <br className="hidden md:block"/>
            For The Future
          </h1>

          <p className="text-slate-300 text-lg mb-10 max-w-2xl leading-relaxed">
            From concept, design and planning to construction and project delivery. We turn visionary ideas into enduring realities with unmatched precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-full text-center hover:bg-orange-600 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-center border border-white/20 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}