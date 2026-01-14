import React from "react";
import Card from "./Card";
import projects from "../data/Projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-(--white) px-4 sm:px-6 lg:px-12 py-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-(--navyblue) mb-4">
            Featured Projects
          </h2>
          <p className="text-(--text-gray) text-sm sm:text-base">
            A curated collection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              task={project.task}
              taskdesc={project.taskdesc}
              tags={project.tags}
              github={project.github}
              vercel={project.vercel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
