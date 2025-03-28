import { motion } from "framer-motion";
import { AboutContent, Selfie } from "../about";
import { fadeInOpacity } from "../../animations/motionConfig";
import { HeadingSection } from "../utils";

export const AboutInfo = () => {
  return (
    <div className="p-16 md:p-32" id="about">
      <HeadingSection h2Text={"/ About me"} />

      <motion.div className="relative w-full h-full" {...fadeInOpacity}>
        <div className="md:-mt-8 flex flex-col-reverse xl:flex-row items-center justify-center md:gap-12 xl:gap-24">
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
