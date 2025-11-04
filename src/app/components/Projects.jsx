import React from "react";
import Card from "./Card";
import projects from "../data/Projects.json";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="w-full min-h-screen bg-(--white) px-2 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-(--navyblue) mb-4">
              Featured Projects
            </h2>
            <p className="text-(--text-gray)">
              A curated collection of my recent work and personal projects
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8">
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
    </>
  );
}
