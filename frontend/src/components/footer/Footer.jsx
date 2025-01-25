import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { IoIosArrowUp } from "react-icons/io";
import { fadeInOpacity } from "../../animations/motionConfig";
import { HeadingSection } from "../utils";

export const Footer = () => {
  return (
    <footer className="relative" id="contact">
      <div className="flex flex-col items-center py-12 px-8 md:pt-40 md:pb-24">
        <HeadingSection
          h3Text={"/ Get in touch"}
          h2Text={`I'd Love to Hear from You!`}
          children={
            <p>
              {" "}
              Do you have a project or an opportunity in mind?{" "}
              <br className="hidden md:block" />
              Don't hesitate to reach out!
            </p>
          }
        />

        <motion.div {...fadeInOpacity}>
          <ContactForm />
        </motion.div>
      </div>

      {/* Go to top button */}
      <motion.div
        className="flex flex-col items-center md:absolute right-7 md:bottom-32 group mb-4 md:mb-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="#">
          <button
            className="flex flex-col items-center"
            aria-label="Go to the top"
          >
            <IoIosArrowUp className="text-terciary group-hover:text-primary transition-all duration-500 group-hover:scale-125 w-8 h-8 md:w-auto md:h-auto" />
            <p className="hidden md:block text-terciary vertical-text cursor-pointer group-hover:text-primary transition-colors duration-500 mt-1 mr-1">
              Go to the top
            </p>
          </button>
        </a>
        <div className="hidden md:block w-6 h-[1px] bg-terciary transform rotate-90 relative right-0 -bottom-8 mr-1"></div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="flex items-center justify-center md:fixed left-8 bottom-28 mb-8 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <p className="left-6  text-slate-500 vertical-text">
          © 2024 Sergio Duran - Almost all rights reserved.
        </p>
        <div className="hidden md:block w-6 h-[1px] bg-slate-500 transform rotate-90 absolute right-0 -bottom-4"></div>
      </motion.div>
    </footer>
  );
};
