import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20 pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white leading-tight tracking-wide uppercase">Weerappan</span>
              <span className="text-xs text-secondary uppercase tracking-widest">Engineering & Construction</span>
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
            Building the future with precision and excellence. We specialize in commercial, residential, and industrial construction projects tailored to your vision.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>123 Construction Blvd, Suite 400<br/>Engineering City, EC 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Weerappan Engineering & Construction. All Rights Reserved.</p>
        <p>Designed with excellence.</p>
      </div>
    </footer>
  );
}