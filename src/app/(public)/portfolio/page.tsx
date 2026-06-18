import PortfolioClient from "@/components/public/portfolio/PortfolioClient";

import {getPublicProjectsAction,} from "@/actions/public.actions";

export default async function PortfolioPage() {
  const projects =
    await getPublicProjectsAction();

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
        Our Projects
      </h1>

      <PortfolioClient
        projects={projects}
      />
    </section>
  );
}