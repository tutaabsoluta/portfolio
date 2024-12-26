import { projects } from "../../data/data";
import { GlassCard } from "./GlassCard";

export const Projects = () => {
  return (
    <main className="py-12 md:p-24 flex flex-col items-center" id="work">
      <h3 className="text-optional mb-4 uppercase tracking-wider text-sm">
        {`/ My work`}
      </h3>
      <h2 className="text-center mb-8 text-terciary leading-none">
        Latest projects I have worked on
      </h2>
      <p className="text-left md:text-center mb-12 w-72 md:w-[500px] xl:w-[600px] text-terciary">
        Here are some of the projects I've been working on recently. Each one
        has been an opportunity to learn and experiment.
      </p>
      
      <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
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
