import { AboutContent } from "./AboutContent";
import { Selfie } from "./Selfie";

export const AboutInfo = () => {
  return (
    <div className="flex items-center justify-center  gap-8">
      <div className="w-1/3">
        <AboutContent />
      </div>
      <div className="">
        <Selfie />
      </div>
    </div>
  );
};
