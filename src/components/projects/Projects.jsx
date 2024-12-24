import { projects } from "../../data/data";
import { GlassCard } from "./GlassCard";

export const Projects = () => {
  return (
    <main className="p-24 flex flex-col items-center" id="work">
      <h3 className="text-optional mb-4 uppercase tracking-wider text-sm">
        {`/ My work`}
      </h3>
      <h2 className="text-center mb-8 text-terciary">
        Latest projects I have worked on
      </h2>
      <p className="text-center mb-12 w-[600px] text-terciary">
        Here are some of the projects I've been working on recently. Each one
        has been an opportunity to learn, experiment, and refine my skills while
        building something meaningful.
      </p>
      
      <div className="flex items-center justify-center gap-8">
        {projects.map((project) => (
          <div key={project.id}>
            <GlassCard
              description={project.description}
              title={project.title}
              imageUrl={project.image}
              technologies={project.technologies}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </main>
  );
};
