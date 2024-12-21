import { IoIosArrowUp } from "react-icons/io";

import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="flex flex-col items-center space-y-8 py-24">
        {/* Heading and paragraph */}
        <h3 className="text-optional uppercase tracking-wider text-sm">
          {`/ Get in touch`}
        </h3>
        <h2 className="text-center text-terciary">
          I'd Love to Hear from You!
        </h2>
        <p className="mt-8 text-base text-center text-terciary">
          Do you have a project or an opportunity in mind? <br />
          Don't hesitate to reach out!
        </p>

        <ContactForm />
      </div>

      <div className="flex flex-col items-center absolute right-7 bottom-36 group">
        <button className="flex flex-col items-center ">
          <IoIosArrowUp className="text-terciary group-hover:text-primary transition-all duration-500 group-hover:scale-125" />
          <p className="text-terciary vertical-text cursor-pointer group-hover:text-primary transition-colors duration-500 mt-1 mr-1">
            Go to the top
          </p>
        </button>
        <div className="w-6 h-[1px] bg-terciary transform rotate-90 relative right-0 -bottom-8 mr-1"></div>
      </div>
    </footer>
  );
};
