import Link from "next/link";
import ContactForm from "../contact/ContactForm";

export default function ContactCTA() {
  return (
    <section className="py-24 relative bg-primary overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Build Your <br/> Next Vision?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
            Contact us today to discuss your project requirements. Our team of experts is ready to deliver excellence from concept to completion.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Call Us Anywhere</p>
                <p className="font-semibold text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-400">Email Us</p>
                <p className="font-semibold text-lg">info@weerappaneng.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphic Form Container */}
        <div className="glass-dark p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl relative">
          <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}