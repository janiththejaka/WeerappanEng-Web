export default function ServicesPreview() {
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
          mb-10
          "
        >
          Our Services
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >
          <div className="border p-6">
            Engineering
          </div>

          <div className="border p-6">
            Design
          </div>

          <div className="border p-6">
            Construction
          </div>
        </div>
      </div>
    </section>
  );
}