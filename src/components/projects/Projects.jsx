import { motion } from "framer-motion";
import { projects } from "../../data/";
import { GlassCard } from "./GlassCard";
import { projectAnimation } from "../../animations/";
import { HeadingSection } from "../utils";

export const Projects = () => {
  return (
    <main className="py-12 md:p-40 flex flex-col items-center" id="work">
      <HeadingSection 
        h3Text={'/ My work'} 
        h2Text={'Latest projects I have worked on'}
        children={<p>Here are some of the projects I've been working on recently. Each one
        has been an opportunity to learn and experiment.</p>}
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            { ...projectAnimation( index ) }
          >
            <GlassCard
              description={project.description}
              title={project.title}
              imageUrl={project.image}
              technologies={project.technologies}
              links={project.links}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};
