import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="mt-12 bg-neutral">
      <div>
        <hr className="border-t border-gray-600" />
        {/* Copyright and Social */}
        <div className="flex justify-between items-center px-12 py-2">
          <div>
            <p className="text-sm">Copyright © 2024 - Sergio Duran</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-green-500 duration-300" />
            </a>
            <a
              href="https://github.com/tutaabsoluta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-green-500 duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
