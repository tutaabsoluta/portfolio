import { motion } from "framer-motion";
import { projects } from "../../data/data";
import { GlassCard } from "./GlassCard";
import { fadeIn, projectAnimation } from "../../animations/motionConfig";

export const Projects = () => {
  return (
    <main className="py-12 md:p-40 flex flex-col items-center" id="work">
      <motion.h3
        className="text-optional mb-4 uppercase tracking-wider text-sm"
        {...fadeIn}
      >
        {`/ My work`}
      </motion.h3>
      <motion.h2
        className="text-center mb-8 text-terciary leading-none"
        {...fadeIn}
      >
        Latest projects I have worked on
      </motion.h2>
      <motion.p
        className="text-left md:text-center mb-12 w-72 md:w-[500px] xl:w-[600px] text-terciary"
        {...fadeIn}
      >
        Here are some of the projects I've been working on recently. Each one
        has been an opportunity to learn and experiment.
      </motion.p>

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
