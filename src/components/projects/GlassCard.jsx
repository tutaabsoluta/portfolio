import { FaLink, FaGithub } from "react-icons/fa";
import { Technology } from "./Technology";


export const GlassCard = ({
  title,
  description,
  imageUrl,
  technologies,
  links,
}) => {
  return (
    <article className="group">
      <div className="flex flex-col justify-evenly gap-4 bg-optional/5 hover:bg-optional/10 backdrop-blur-xl rounded-xl border border-white/20 max-w-80 h-[21rem] relative transition-all duration-300 py-3">
        <div className="space-y-5 p-4">
          <div className="flex items-center gap-2">
            {technologies.map((technology, index) => (
              <Technology imageUrl={technology.url} alt={technology.name} key={index} />
            ))}
          </div>

          <div className="absolute right-4 -top-2">
              <img
                src={imageUrl}
                alt={`${title} project`}
                className="h-16 w-24 rounded-lg outline outline-1 outline-optional/5 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 object-cover"
              />
          </div>

          <h3 className="text-lg text-primary transition-all duration-300">{title}</h3>
          <p className="text-slate-300 text-sm leading-relaxed">{description}</p>

          <div className="flex justify-center gap-8">
            <a 
              href={links.project}
              rel="noopener noreferrer"
              target="_blanck"
            >
              <button aria-label="Open Project" className="flex items-center gap-2 bg-white/20 rounded-md px-6 py-2 outline outline-1 outline-terciary/15 text-terciary text-base hover:bg-white/40 transition-colors duration-300">
                Link
                <FaLink className="w-4 h-4" />
              </button>
            </a>

            <a 
              href={links.github}
              rel="noopener noreferrer"
              target="_blanck"
            >
              <button aria-label="Open Github Repository" className="flex items-center gap-2 bg-optional/5 rounded-md px-6 py-2 outline outline-1 outline-terciary/15 text-terciary text-base hover:bg-optional/15 transition-colors duration-300">
                Code
                <FaGithub className="w-5 h-5" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
