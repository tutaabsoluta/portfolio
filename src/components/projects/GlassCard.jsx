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
      <div
        className="flex flex-col md:flex-row bg-optional/5 hover:bg-optional/10 backdrop-blur-xl rounded-xl border border-white/20 
                      max-w-md md:max-w-2xl h-auto md:h-[21rem] relative transition-all duration-300 overflow-hidden"
      >
        {/* Contenedor de la imagen */}
        <div className="w-full md:w-1/2 p-3 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={description}
            className="w-full h-64 md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Contenedor del contenido */}
        <div className="flex flex-col justify-evenly gap-4 w-full md:w-1/2 py-3">
          <div className="space-y-5 p-4">
            <h3 className="text-xl text-primary transition-all duration-300">
              {title}
            </h3>

            <div className="flex items-center gap-2">
              {technologies.map((technology, index) => (
                <Technology
                  imageUrl={technology.url}
                  alt={technology.name}
                  key={index}
                />
              ))}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>

            <div className="flex justify-center gap-4">
              <a href={links.project} rel="noopener noreferrer" target="_blank">
                <button
                  aria-label="Open Project"
                  className="flex items-center gap-2 bg-white/20 rounded-md px-6 py-2 outline outline-1 outline-terciary/15 text-white hover:bg-white/40 transition-colors duration-300"
                >
                  Link
                  <FaLink className="w-4 h-4" />
                </button>
              </a>

              <a href={links.github} rel="noopener noreferrer" target="_blank">
                <button
                  aria-label="Open Github Repository"
                  className="flex items-center gap-2 bg-optional/5 rounded-md px-6 py-2 outline outline-1 outline-terciary/15 text-white hover:bg-optional/15 transition-colors duration-300"
                >
                  Code
                  <FaGithub className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
