import React from "react";
import { ContactForm, Header } from "../ui";
import { Button, Heading, PitchBanner, Projects } from "../components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <div className=" mt-24 flex items-center gap-x-96">
          <div className="space-y-8">
            <h2 className="text-white">About me</h2>
            <p className="text-2xl leading-relaxed text-white">
              I am a software developer with a strong focus on frontend
              technologies. I am passionate about writing clean, maintainable
              code and staying up-to-date with the latest trends in frontend
              development.
            </p>
          </div>

          <div className="relative">
            {/* BG Image */}
            <img
              src="selfie-bg.svg"
              alt="Background Color"
              className="max-w-md"
            />

            {/* Selfie */}
            <img
              src="selfie.webp"
              alt="Selfie Image"
              className="absolute top-0 left-0 max-w-md"
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

      {/* <div className="mb-36">
        <div className="w-3/5">
          <PitchBanner />
        </div>
      </div> */}

      <div className="mt-[-50px] mb-24">
        <Heading title="Latest projects I have worked on" />
        <Projects />
      </div>

      <div className="mt-36">
        <Heading title="Get in Touch!" />
        <p className="text-center mb-16 text-white">
          If you have any questions or a proposal, feel free to send me a
          message!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

// TODO notificacion de descarga de cv y envio form. Tamano de parrafo en form
