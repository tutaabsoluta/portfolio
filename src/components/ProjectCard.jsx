import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      
        <div className="flex items-center rounded-xl bg-secondary overflow-hidden relative">
          {/* Image with dark overlay on hover */}
          <div className="relative w-2/5 h-full">
            <img
              src={url}
              alt={`${name} project`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            
            {/* Links that appear on hover, centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex gap-4">
                <Link to={link}>
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                    <FaLink />
                  </div>
                </Link>
                <Link to={link}>
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-3/5 px-6 space-y-6 relative">
            <h2 className="text-primary">{name}</h2>
            <p className="text-white">{description}</p>



            {/* Technologies */}
            <div className="flex items-center justify-center gap-1">
              {technologies.map((technology, idx) => (
                <Technology key={idx} imageUrl={technology} />
              ))}
            </div>
          </div>
        </div>
      
    </div>
  );
};
