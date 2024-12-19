import { IoIosArrowUp } from "react-icons/io";

import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="flex flex-col items-center space-y-8 p-20">
        {/* Heading and paragraph */}
        <h3 className="text-optional uppercase tracking-wider text-sm">
          {`/ Get in touch`}
        </h3>
        <h2 className="text-center text-terciary">I'd Love to Hear from You!</h2>
        <p className="mt-8 text-base text-center text-terciary">
          Do you have a project or an opportunity in mind?  <br />
          Don't hesitate to reach out!
        </p>

        <ContactForm />
      </div>

      <div className="flex flex-col items-center absolute right-7 bottom-36">
        <button className="mb-2 ml-1 p-[2px] rounded-full bg-terciary hover:scale-125 transition-transform duration-300">
          <IoIosArrowUp className="text-accent" />
        </button>
        <p className="text-terciary vertical-text cursor-default">Go to the top</p>
        <div className="w-6 h-[1px] bg-terciary transform rotate-90 relative right-0 -bottom-8"></div>
      </div>
    </footer>
  );
};
