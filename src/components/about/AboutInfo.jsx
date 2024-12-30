import { motion } from "framer-motion";
import { AboutContent, Selfie } from "../about";

export const AboutInfo = () => {
  return (
    <div className="p-12 md:p-40" id="about">
      <motion.h3 
        className="text-optional mb-4 uppercase tracking-wider text-sm text-center"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >{`/ About me`}</motion.h3>
      <motion.h2 
        className="text-terciary text-center leading-normal"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        A little bit about me
      </motion.h2>

      <motion.div 
        className="relative w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-8">
          <div className="xl:w-2/5">
            <div className="mb-8"></div>
            <AboutContent />
          </div>

          <div>
            <Selfie />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
