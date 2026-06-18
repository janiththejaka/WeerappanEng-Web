import { Metadata }from "next";

export const metadata: Metadata = {
  title:
    "About Us | Weerppan Engineering",

  description:
    "Engineering, Design and Construction Services",
};
export default function AboutPage() {
  return (
    <section
      className="
      max-w-6xl
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
        About Us
      </h1>

      <div className="space-y-6">
        <p>
          We provide engineering,
          design and construction
          solutions from concept to
          project delivery.
        </p>

        <p>
          Our expertise spans water
          supply systems,
          infrastructure,
          buildings and road
          development projects.
        </p>

        <p>
          We are committed to
          delivering sustainable,
          high-quality projects that
          create long-term value for
          communities and clients.
        </p>
      </div>
    </section>
  );
}