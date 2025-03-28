import { motion } from "framer-motion";
import { ContactForm } from "../footer/ContactForm";
import { IoIosArrowUp } from "react-icons/io";
import { fadeInOpacity } from "../../animations/motionConfig";
import { HeadingSection, Socials } from "../utils";

export const Footer = () => {
  return (
<footer className="relative" id="contact">
      <div className="flex flex-col items-center py-12 px-8 md:pt-32 md:pb-24">
        <HeadingSection
          h2Text={`/ Get in touch`}
          children={
            <p>
              {" "}
              Do you have a project or an opportunity in mind? <br className="hidden md:block" />
              Don't hesitate to reach out!
            </p>
          }
        />

        <motion.div {...fadeInOpacity}>
          <ContactForm />
        </motion.div>
      </div>

      {/* Footer bottom section with copyright and socials */}
      <div className="w-full border-t border-slate-800 mt-8">
        <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright - now horizontal */}
          <motion.p
            className="text-terciary text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            © 2024 Sergio Duran - All rights reserved.
          </motion.p>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="mt-4 md:mt-0"
          >
            <Socials />
          </motion.div>
        </div>
      </div>

      {/* Go to top button - redesigned */}
      {/* <motion.div
        className="fixed right-6 bottom-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a href="#">
          <button
            className="bg-secondary hover:outline-primary text-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Go to the top"
          >
            <IoIosArrowUp className="w-6 h-6" />
          </button>
        </a>
      </motion.div> */}
    </footer>
  );
};
