"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";

interface Props {
  projects: Project[];
}

export default function PortfolioClient({ projects }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-secondary text-white shadow-lg shadow-secondary/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-secondary hover:text-secondary"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
           <h3 className="text-xl font-semibold text-slate-400">No projects found in this category.</h3>
        </div>
      )}
    </>
  );
}