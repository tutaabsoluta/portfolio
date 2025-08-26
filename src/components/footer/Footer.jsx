import { motion } from "framer-motion";
import { ContactForm } from "../footer/ContactForm";
import { fadeInOpacity } from "../../animations/motionConfig";
import { Socials } from "../utils";
import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative" id="contact">
      <div className="flex flex-col py-12 px-8 md:px-32 md:pt-32">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Mail className="text-primary w-[48px] h-[48px] " />
          <h2 className="text-white text-center">Get in Touch</h2>
        </div>
        <p className="text-terciary text-center mb-12">
          Do you have a project or an opportunity in mind? <br />
          Don't hesitate to reach out!
        </p>

        <motion.div {...fadeInOpacity}>
          <ContactForm />
        </motion.div>
      </div>

      <div className="w-full border-t border-slate-800 mt-8">
        <div className="container mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center">
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
    </footer>
  );
};
