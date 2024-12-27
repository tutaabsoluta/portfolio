import { AboutContent, Selfie } from "../about";

export const AboutInfo = () => {
  return (
    <div className="p-12 md:p-24" id="about">
      <h3 className="text-optional mb-4 uppercase tracking-wider text-sm text-center">{`/ About me`}</h3>
      <h2 className="text-terciary text-center leading-normal">
        A little bit about me
      </h2>

      <div className="relative w-full h-full">
        <div className="relative z-10 flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-8">
          <div className="xl:w-2/5">
            <div className="mb-8"></div>
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