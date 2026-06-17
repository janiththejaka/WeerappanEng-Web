import Link from "next/link";

export default function AboutPreview() {
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
        "
      >
        <h2
          className="
          text-4xl
          font-bold
          "
        >
          About Us
        </h2>

        <p
          className="
          mt-6
          max-w-3xl
          "
        >
          We provide engineering,
          design and construction
          services from concept to
          project delivery.
        </p>

        <Link
          href="/about"
          className="
          inline-block
          mt-6
          "
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
}