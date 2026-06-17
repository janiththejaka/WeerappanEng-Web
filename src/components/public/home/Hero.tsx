import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      min-h-[80vh]
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <p>
          Engineering • Design • Construction
        </p>

        <h1
          className="
          text-6xl
          font-bold
          mt-4
          "
        >
          Building Sustainable
          Infrastructure
          For The Future
        </h1>

        <p className="mt-6">
          From concept, design and
          planning to construction
          and project delivery.
        </p>

        <Link
          href="/portfolio"
          className="
          inline-block
          mt-8
          border
          px-6
          py-3
          "
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}