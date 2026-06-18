"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function PortfolioClient({
  projects,
}: Props) {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      projects.map(
        (project) => project.category
      )
    ),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            selectedCategory
        );

  return (
    <>
      <div
        className="
        flex
        flex-wrap
        gap-3
        mb-10
      "
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`
              px-4
              py-2
              rounded-lg
              border
              ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : ""
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="
        grid
        md:grid-cols-3
        gap-8
      "
      >
        {filteredProjects.map(
          (project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          )
        )}
      </div>
    </>
  );
}