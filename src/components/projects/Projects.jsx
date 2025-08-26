import { motion } from "framer-motion";
import { projects } from "../../data/";
import { GlassCard } from "./GlassCard";
import { projectAnimation } from "../../animations/";
import { Briefcase } from "lucide-react";

export const Projects = () => {
  return (
    <main className="p-8 md:p-32 flex flex-col" id="work">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-primary w-[48px] h-[48px] " />
          <h2 className="text-white">Projects</h2>
        </div>
        <p className="text-terciary max-w-xl mb-8 leading-relaxed">
          In my personal projects, I experiment and refine my skills. I’ve built
          a PERN Ticket System with real-time updates, a night trips platform
          using Node.js and Handlebars as a template engine, and a pixel-perfect
          Bakery Shop using React + Tailwind.
        </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-2 place-items-center gap-8">
        {projects.map((project, index) => (
          <motion.div key={project.id} {...projectAnimation(index)}>
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
