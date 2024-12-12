import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-12 bg-accent py-6">
      <div className="container mx-auto px-8">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-terciary">Copyright © 2024 - Sergio Duran</p>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-terciary " />
            </a>
            <a
              href="https://github.com/tutaabsoluta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl text-terciary " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
