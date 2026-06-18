export default function ServicesPage() {
  const services = [
    {
      title: "Engineering",
      description:
        "Planning, technical design and engineering consultancy.",
    },
    {
      title: "Design",
      description:
        "Architectural and infrastructure design solutions.",
    },
    {
      title: "Construction",
      description:
        "End-to-end project execution and delivery.",
    },
  ];

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
        Our Services
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
        "
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="
            border
            rounded-xl
            p-8
            "
          >
            <h2
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              {service.title}
            </h2>

            <p>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}