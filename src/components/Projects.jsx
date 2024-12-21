import { projects } from "../data/data";
import { GlassCard } from "./GlassCard";

export const Projects = () => {

  return (
    <main className="flex items-center justify-center gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
        >
          <GlassCard 
            description={ project.description }
            title={ project.title }
            imageUrl={ project.image }
            technologies={ project.technologies } 
          />
        </div>
      ))}
    </main>
  );
};
