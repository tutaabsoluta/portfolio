import { motion } from "framer-motion";
import { AboutContent, Selfie } from "../about";
import { fadeInOpacity } from "../../animations/motionConfig";
import { User } from "lucide-react";

export const AboutInfo = () => {
  return (
    <div className="p-16 md:p-32" id="about">
          <div className="flex items-center gap-4 mb-12">
          <User className="text-primary w-[48px] h-[48px] " />
          <h2 className="text-white">About me</h2>
        </div>

      <motion.div className="relative w-full h-full" {...fadeInOpacity}>
        <div className="md:-mt-8 flex flex-col-reverse xl:flex-row items-center justify-center md:gap-12 xl:gap-24">
          <div className="xl:w-3/5 2xl:w-2/5">
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
