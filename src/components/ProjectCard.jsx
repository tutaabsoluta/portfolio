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
      <div className="max-w-xl flex flex-col items-center rounded-xl bg-secondary overflow-hidden relative">
        {/* Image */}
        <div className="w-full">
          <img
            src={url}
            alt={`${name} project`}
            className="w-full h-[200px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-3 space-y-6">
          <h3 className="text-primary">{name}</h3>
          <p className="text-white text-sm">{description}</p>

          {/* Technologies */}
          <div className="flex gap-2 justify-between">
            <div className="flex items-center justify-center gap-1">
              {technologies.map((technology, idx) => (
                <Technology key={idx} imageUrl={technology} />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 items-center">
              <div className="bg-accent text-white px-2 py-2 rounded-md">
                <button className="flex items-center gap-2">
                  Code <FaGithub />
                </button>
              </div>
              <div className="bg-accent text-white px-2 py-2 rounded-md">
                <button className="flex items-center gap-2">
                  Link <FaLink />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
