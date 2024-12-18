import { AboutContent, Selfie } from "../components";

export const AboutInfo = () => {
  return (
    <div>

      <h3 className="text-optional mb-4 uppercase tracking-wider text-sm text-center mt-12">{`/ About me`}</h3>
      <h2 className="text-terciary text-center leading-normal">A little bit about me</h2>

      <div className="relative w-full h-full">
        <div className="relative z-10 flex items-center justify-center gap-8 pb-12">
          <div className="w-2/5">
            <div className="flex flex-col mb-8"></div>
            <AboutContent />
          </div>

          <div>
            <Selfie />
          </div>
        </div>
      </div>
    </div>
  );
};
