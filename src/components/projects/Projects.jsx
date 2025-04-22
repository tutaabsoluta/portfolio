import { motion } from "framer-motion";
import { projects } from "../../data/";
import { GlassCard } from "./GlassCard";
import { projectAnimation } from "../../animations/";
import { HeadingSection } from "../utils";

export const Projects = () => {
  return (
    <main className="py-12 md:p-32 flex flex-col items-center" id="work">

      
      <HeadingSection 
        h2Text={'/ My work'}
        children={<p>In my personal projects, I experiment and refine my skills. I’ve built a PERN Ticket System with real-time updates, a night trips platform using Node.js and Handlebars as a template engine, and a pixel-perfect Bakery Shop using React + Tailwind.</p>}
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
