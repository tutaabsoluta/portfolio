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
    <div class="group">
      <div class="flex flex-col justify-evenly gap-4 bg-optional/5 hover:bg-optional/10 backdrop-blur-xl rounded-xl border border-white/20 max-w-72 h-auto relative transition-all duration-300">
        <div className="space-y-5 p-4">
          <div className="flex items-center gap-2">
            {technologies.map((technology) => (
              <Technology imageUrl={technology.url} />
            ))}
          </div>

          <div className="absolute right-4 -top-2">
              <img
                src={imageUrl}
                alt=""
                className="h-16 w-24 rounded-lg opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
          </div>

          <h3 className="text-white text-lg group-hover:text-primary transition-all duration-300">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>

          <div className="flex justify-center gap-8">
            <a 
              href={links.project}
              rel="noopener noreferrer"
              target="_blanck"
            >
              <button className="flex items-center gap-1 bg-optional/5 rounded-md px-6 py-1 outline outline-1 outline-terciary/15 text-terciary text-sm hover:bg-optional/15 transition-colors duration-300">
                Link
                <FaLink />
              </button>
            </a>

            <a 
              href={links.github}
              rel="noopener noreferrer"
              target="_blanck"
            >
              <button className="flex items-center gap-1 bg-optional/5 rounded-md px-6 py-1 outline outline-1 outline-terciary/15 text-terciary text-sm hover:bg-optional/15 transition-colors duration-300">
                Code
                <FaGithub />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
