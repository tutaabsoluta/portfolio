import { ContactForm } from "../footer/ContactForm";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="relative" id="contact">
      <div className="flex flex-col items-center space-y-8 py-12 px-8 md:py-24">
        {/* Heading and paragraph */}
        <h3 className="text-optional uppercase tracking-wider text-sm">
          {`/ Get in touch`}
        </h3>
        <h2 className="text-center text-terciary">
          I'd Love to Hear from You!
        </h2>
        <p className="mt-8 text-base text-center text-terciary">
          Do you have a project or an opportunity in mind? <br className="hidden md:block" />
          Don't hesitate to reach out!
        </p>

        <ContactForm />
      </div>

      {/* Go to top button */}
      <div className="flex flex-col items-center md:absolute right-7 md:bottom-32 group mb-4 md:mb-0">
        <a href="#">
          <button className="flex flex-col items-center ">
            <IoIosArrowUp className="text-terciary group-hover:text-primary transition-all duration-500 group-hover:scale-125 w-8 h-8 md:w-auto md:h-auto" />
            <p className="hidden md:block text-terciary vertical-text cursor-pointer group-hover:text-primary transition-colors duration-500 mt-1 mr-1">
              Go to the top
            </p>
          </button>
        </a>
        <div className="hidden md:block w-6 h-[1px] bg-terciary transform rotate-90 relative right-0 -bottom-8 mr-1"></div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center md:fixed left-8 bottom-28 mb-8 md:mb-0">
        <p className="left-6  text-slate-500 vertical-text">
          © 2024 Sergio Duran - Almost all rights reserved.
        </p>
        <div className="hidden md:block w-6 h-[1px] bg-slate-500 transform rotate-90 absolute right-0 -bottom-4"></div>

      </div>


    </footer>
  );
};

