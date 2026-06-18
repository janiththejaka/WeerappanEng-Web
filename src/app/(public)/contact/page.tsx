import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us | Weerappan Engineering",

  description:
    "Engineering, Design and Construction Services",
};
export default function ContactPage() {
  return (
    <section
      className="
      max-w-5xl
      mx-auto
      px-6
      py-20
      "
    >
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Contact Us
      </h1>

      <div className="space-y-4">
        <p>
          📍 Company Address
        </p>

        <p>
          📞 +94 XX XXX XXXX
        </p>

        <p>
          ✉ info@company.com
        </p>
      </div>
    </section>
  );
}