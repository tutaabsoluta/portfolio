import { FaGithub, FaLink } from "react-icons/fa";
import { Technology } from "./Technology";

export const ProjectCard = ({
  name,
  description,
  url,
  link,
  index,
  hoveredCard,
  technologies,
}) => {
  const isHovered = hoveredCard === index || hoveredCard === null;

  return (
    <div
      className={`group transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="flex flex-col rounded-xl bg-accent overflow-hidden relative max-w-xs outline outline-1 outline-secondary">
        {/* Image */}
        <div className="w-full">
          <img
            src={url}
            alt={`${name} project`}
            className="w-full h-[160px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-3 space-y-6">
          <h3 className="text-primary">{name}</h3>
          <div className="flex items-center justify-center gap-2">
            {technologies.map((technology, idx) => (
              <Technology
                key={idx}
                name={technology.name}
                url={technology.url}
              />
            ))}
          </div>
          <p className="text-terciary text-sm h-20">{description}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-8 pb-2">
            <div className="bg-slate-800 text-terciary px-8 py-2 rounded-md outline outline-1 outline-secondary/60">
              <a href={link} rel="noopener noreferrer" target="_blank">
                <button className="flex items-center gap-2">
                  <FaGithub /> Code
                </button>
              </a>
            </div>
            <div className="bg-slate-800 text-terciary px-8 py-2 rounded-md outline outline-1 outline-secondary/60">
              <a href={link} rel="noopener noreferrer" target="_blank">
                <button className="flex items-center gap-2">
                  <FaLink /> Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
