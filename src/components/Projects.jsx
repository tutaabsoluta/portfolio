import { projects } from "../data/data";
import { WorkCard } from "./WorkCard";

export const Projects = () => {

  return (
    <main className="flex items-center justify-center gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
        >
          <WorkCard
            name={project.title}
            description={project.description}
            url={project.image}
            link={project.link}
            technologies={project.technologies}
          />
        </div>
      ))}
    </main>
  );
};
