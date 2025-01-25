import { motion } from "framer-motion";
import { AboutContent, Selfie } from ".";
import { fadeInOpacity } from "../../animations/motionConfig";
import { HeadingSection } from "../utils";

export const AboutInfo = () => {
  return (
    <div className="p-12 md:p-40" id="about">

    <HeadingSection
      h3Text={'/ About me'}
      h2Text={'A little bit about me'}
    />


      <motion.div
        className="relative w-full h-full"
        { ...fadeInOpacity }
      >
        <div className="relative z-10 md:-mt-12 flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-8">
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
