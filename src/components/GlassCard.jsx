import { FaLink, FaGithub } from "react-icons/fa";
import { Technology } from "./Technology";

export const GlassCard = ({ title, description, imageUrl, technologies }) => {
  return (
    <div class="group">
      <div class="flex flex-col justify-evenly gap-4 bg-optional/5 hover:bg-optional/10 transition-all duration-300 backdrop-blur-xl rounded-xl border border-white/20  max-w-sm min-h-[260px]">
        <div className="space-y-5 p-4">
          <div className="flex items-center gap-2">
            {technologies.map((technology) => (
              <Technology imageUrl={technology.url} />
            ))}
          </div>

          <h3 className="text-white text-lg">{title}</h3>
          <p className="text-slate-400 text-sm">{description}</p>

          <div className="flex gap-4">
            <button className="flex items-center gap-1 bg-optional/5 rounded-md px-3 py-1 outline outline-1 outline-terciary/15 text-terciary text-sm hover:bg-optional/15 transition-colors duration-300">
              Link
              <FaLink />
            </button>
            <button className="flex items-center gap-1 bg-optional/5 rounded-md px-3 py-1 outline outline-1 outline-terciary/15 text-terciary text-sm hover:bg-optional/15 transition-colors duration-300">
              Code
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
