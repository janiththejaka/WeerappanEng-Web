import ContactForm from "@/components/public/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-6 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[150%] rounded-full bg-secondary blur-[100px]" />
         </div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="text-slate-300 text-lg">We'd love to hear from you. Reach out to discuss your next big project.</p>
         </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Get In Touch</span>
              <h2 className="text-3xl font-bold text-primary mb-6">Let's start building your vision together.</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our experts are ready to answer your questions and provide the support you need. Contact us via phone, email, or by filling out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-primary">Head Office</p>
                  <p className="text-slate-600 text-sm mt-1">123 Construction Blvd, Suite 400<br/>Engineering City, EC 12345</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-primary">Phone Number</p>
                  <p className="text-slate-600 text-sm mt-1">+1 (555) 123-4567<br/>+1 (555) 987-6543 (Support)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 flex-shrink-0">
                  ✉
                </div>
                <div>
                  <p className="font-semibold text-primary">Email Address</p>
                  <p className="text-slate-600 text-sm mt-1">info@weerappaneng.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary border border-slate-100 flex-shrink-0">
                  🕒
                </div>
                <div>
                  <p className="font-semibold text-primary">Working Hours</p>
                  <p className="text-slate-600 text-sm mt-1">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h3>
            <div className="bg-slate-50/50 -mx-8 -my-8 p-8 pb-12 rounded-3xl">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}