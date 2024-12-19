import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

import { ContactForm } from "./ContactForm";

export const Footer = () => {
  return (
    <footer className="pt-12 relative">
      <div className="flex flex-col items-center space-y-12 p-20">
        {/* Heading and paragraph */}
        <h3 className="text-optional mb-4 uppercase tracking-wider text-sm">
          {`/ Get in touch`}
        </h3>
        <h2 className=" text-center text-terciary">Let's Work Together</h2>
        <p className="mt-8 text-base text-center text-terciary">
          If you have any questions or a proposal, feel free to send me a
          message!
        </p>

        <ContactForm />
      </div>

      <div className="flex flex-col items-center absolute right-7 bottom-36">
        <button className="bg-accent p-2 rounded-full mb-2 ml-1">
          {/* <MdOutlineKeyboardDoubleArrowUp className="text-terciary" /> */}
          <img src="arrow.svg" alt="" className="w-6 h-6" />
        </button>
        <p className="text-slate-500 vertical-text">Go to the top</p>
        <div className="w-6 h-[1px] bg-slate-500 transform rotate-90 relative right-0 -bottom-8"></div>
      </div>
    </footer>
  );
};
