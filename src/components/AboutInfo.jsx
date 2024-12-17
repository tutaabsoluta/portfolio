import { div } from "framer-motion/client";
import { AboutContent, Selfie } from "../components";

export const AboutInfo = () => {
  return (
    <div className="relative w-full h-full">

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center gap-8 p-16">
        <div className="w-3/5">
        <div className="flex flex-col mb-8">
          <h3 className="text-primary mb-4 uppercase tracking-wider text-sm">
            {`/ About me`}
          </h3>
          {/* <div className="w-[100px] h-[1px] bg-primary"></div> */}
        </div>
          <AboutContent />
        </div>

        <div className="">
          <Selfie />
        </div>
      </div>
    </div>
  );
};
