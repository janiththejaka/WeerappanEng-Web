import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="
      py-24
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        text-center
        "
      >
        <h2
          className="
          text-4xl
          font-bold
          "
        >
          Let's Build Together
        </h2>

        <Link
          href="/contact"
          className="
          inline-block
          mt-6
          border
          px-6
          py-3
          "
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}