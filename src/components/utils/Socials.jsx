import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-xl text-terciary hover:text-optional hover:scale-105 transition-all duration-300" />
      </a>
      <a
        href="https://github.com/tutaabsoluta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-xl text-terciary hover:text-optional hover:scale-105 transition-all duration-300" />
      </a>
    </div>
  );
};
