import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="pt-12 bg-terciary ">
      <div className="flex flex-col items-center space-y-12 p-20">
        {/* Heading and paragraph */}

        <h2 className=" text-center">Let's Work Together</h2>
        <p className="mt-8 text-base text-center text-black/70">
          If you have any questions or a proposal, feel free to send me a
          message!
        </p>

        <ContactForm />

        {/* Button */}
        {/* <button className="px-4 bg-accent py-2 rounded-md text-terciary">
          Get in touch
        </button> */}
      </div>

      <div className="flex items-center justify-around gap-24 bg-slate-400 w-full p-2">
        {/* Copyright */}
        <p className="text-sm text-black/70">
          Copyright © 2024 Sergio Duran - Almost all rights reserved
        </p>
        {/* Socials */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/sergio-dur%C3%A1n-018071260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl text-black/70" />
          </a>
          <a
            href="https://github.com/tutaabsoluta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-black/70" />
          </a>
        </div>
      </div>
    </footer>
  );
};
