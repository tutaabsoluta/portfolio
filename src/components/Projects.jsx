import { useState } from "react";
import { projects } from "../data/data";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <main className="container mx-auto grid grid-cols-2 gap-16">
      {projects.map((project, index) => (
        <div
          key={project.id}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <ProjectCard
            index={index}
            hoveredCard={hoveredCard}
            name={project.title}
            description={project.description}
            url={project.image}
            link={project.link}
            technologies={ project.technologies }
          />
        </div>
      ))}
    </main>
  );
};
