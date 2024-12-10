import { FaGithub, FaLink } from "react-icons/fa";

export const ProjectInfo = () => {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex gap-2">
          <Link to={link}>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaLink />
            </div>
          </Link>
          <Link to={link}>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaGithub />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};



