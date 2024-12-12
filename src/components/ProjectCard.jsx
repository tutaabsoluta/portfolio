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
      <div className="flex flex-col items-center rounded-xl bg-accent overflow-hidden relative max-w-xs outline outline-1 outline-secondary">
        {/* Image */}
        <div className="w-full">
          <img
            src={url}
            alt={`${name} project`}
            className="w-full h-[180px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-3 space-y-6">
          <h3 className="text-primary">{name}</h3>
          <div className="flex items-center justify-center gap-1">
            {technologies.map((technology, idx) => (
              <Technology key={idx} name={ technology.name } url={ technology.url }  />
            ))}
          </div>
          <p className="text-white text-sm">{description}</p>

          {/* Buttons */}

          {/* Buttons */}
          <div className="flex justify-center gap-8">
            <div className="bg-slate-800 text-white px-8 py-2 rounded-md outline outline-1 outline-secondary">
              <button className="flex items-center gap-2">
                <FaGithub /> Code
              </button>
            </div>
            <div className="bg-slate-800 text-white px-8 py-2 rounded-md outline outline-1 outline-secondary">
              <button className="flex items-center gap-2">
                <FaLink /> Link
              </button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};
