import ContactForm from
"@/components/public/contact/ContactForm";

export default function ContactPage() {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      px-6
      py-20
      "
    >
      <h1
        className="
        text-5xl
        font-bold
        mb-12
        "
      >
        Contact Us
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        gap-12
        "
      >
        <div>
          <h2
            className="
            text-2xl
            font-semibold
            mb-6
            "
          >
            Get In Touch
          </h2>

          <div className="space-y-4">
            <p>
              📍 Company Address
            </p>

            <p>
              📞 Company Phone
            </p>

            <p>
              ✉ Company Email
            </p>

            <p>
              🕒 Mon - Sat
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}