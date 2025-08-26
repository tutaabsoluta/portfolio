import { motion } from "framer-motion";
import { fadeIn } from "../../animations/motionConfig";

export const HeadingSection = ({ h2Text, children, Icon }) => {
  return (
    <>
      <motion.div
        className="flex items-center gap-4 mb-4"
        {...fadeIn}
      >
        {Icon && <Icon className="text-primary w-[48px] h-[48px]" />}
        <h2 className="text-white">{h2Text}</h2>
      </motion.div>

      <motion.p
        className="text-terciary max-w-xl mb-4"
        {...fadeIn}
      >
        {children}
      </motion.p>
    </>
  );
};
