import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-12">
      <div>
        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          <Link to="https://github.com/tutaabsoluta">
            <FaGithubSquare className="w-[40px] h-[40px]" />
          </Link>
          <Link to="http://www.linkedin.com/in/sergio-durán-018071260">
            <FaLinkedin className="w-[40px] h-[40px]" />
          </Link>
          <a href="mailto:538ser@gmail.com" className="inline-block">
            <RiMailFill className="w-[45px] h-[45px]" />
          </a>
        </div>

        <p className="text-center mt-8 text-slate-500">
          Copyright © 2024 - Sergio Duran
        </p>

        <img
          src="footer.png"
          alt="Footer Image"
          className="w-full h-full -mt-16"
        />
      </div>
    </footer>
  );
};
