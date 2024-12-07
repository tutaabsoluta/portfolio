import { Link } from "react-router-dom";

export const ProjectCard = ({ name, description, url, link }) => {
  return (
    <div className="flex items-center rounded-3xl bg-secondary overflow-hidden">
      {/* Content */}
      <div className="w-1/2 px-12 space-y-12">
        <h2 className="text-accent">{name}</h2>
        <p className="text-white">{description}</p>
        
        <Link to={ link }>
          <button className="px-[24px] py-[8px] outline outline-2 rounded-full font-bold mt-8 text-white">
            View Project
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="w-1/2 h-full">
        <img
          src={url}
          alt={`${name} project`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
