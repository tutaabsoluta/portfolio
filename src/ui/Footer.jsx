import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-12 bg-primary/85 py-6">
      <div className="container mx-auto px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-white">Copyright © 2024 - Sergio Duran</p>
          <div className="flex space-x-4 text-sm text-white">
            <a href="/about" className="hover:text-green-500">
              About
            </a>
            <a href="/projects" className="hover:text-green-500">
              Projects
            </a>
            <a href="/contact" className="hover:text-green-500">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-white " />
            </a>
            <a
              href="https://github.com/tutaabsoluta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl text-white " />
            </a>

            <a href="mailto:538ser@gmail.com">
              <FaEnvelope className="text-xl text-white " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
