import { ContactForm, Header } from "../ui";
import { Heading, Projects } from "../components";
import { FaEnvelope } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <Heading
        title1={"Latest"}
        span={"projects"}
        title2={"I have worked on"}
      />

      <Projects />

      <Heading title1={"A little bit"} span={"about"} title2={"me"} />

      <div className="flex items-center max-w-3xl mx-auto">
        <div className="space-y-4 max-w-md">
          <p className="text-sm leading-relaxed text-terciary">
            I am a software developer with a strong focus on frontend
            technologies. I am passionate about writing clean, maintainable code
            and staying up-to-date with the latest trends in frontend
            development.
          </p>
          <p className="text-sm leading-relaxed text-terciary">
            I am a software developer with a strong focus on frontend
            technologies. I am passionate about writing clean, maintainable code
            and staying up-to-date with the latest trends in frontend
            development.
          </p>
          <p className="text-sm leading-relaxed text-terciary">
            I am a software developer with a strong focus on frontend
            technologies. I am passionate about writing clean, maintainable code
            and staying up-to-date with the latest trends in frontend
            development.
          </p>
        </div>

        <div className="relative  mx-auto">
          {/* BG Image */}
          <img
            src="selfie-bg.svg"
            alt="Background Color"
            className="w-full max-w-[16rem] object-contain"
          />

          {/* Selfie */}
          <img
            src="selfie.webp"
            alt="Selfie Image"
            className="absolute top-0 left-0 w-full max-w-[16rem] object-contain"
            style={{
              WebkitMaskImage: "url('selfie-bg.svg')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
              maskImage: "url('selfie-bg.svg')",
              maskRepeat: "no-repeat",
              maskSize: "cover",
            }}
          />
        </div>
      </div>

      <div className="mt-36">
        <Heading title1={"Get in"} span={"touch"} />
        <p className="text-center mb-8 text-terciary">
          If you have any questions or a proposal, feel free to send me a
          message!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};
