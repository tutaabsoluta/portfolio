import { motion } from "framer-motion";
import { fadeIn } from "../../animations/motionConfig";

export const HeadingSection = ({ h2Text, h3Text, children }) => {
  return (
    <>
      <motion.h3
        className="text-primary mb-4 uppercase tracking-wider text-sm text-center"
        {...fadeIn}
      >
        { h3Text }
      </motion.h3>
      <motion.h2
        className="text-center mb-8 text-terciary leading-none"
        {...fadeIn}
      >
        { h2Text }
      </motion.h2>
      <motion.p
        className="text-left md:text-center mb-12 w-72 md:w-[500px] xl:w-[600px] text-terciary"
        {...fadeIn}
      >
       { children }
      </motion.p>
    </>
  );
};
