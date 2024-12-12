import React from "react";
import { Header } from "../ui";
import { Heading, Projects } from "../components";
import { FaEnvelope } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <section className="text-white text-3xl mb-36 bg-accent flex items-center justify-center">
        <h2 className="text-center">Projects</h2>
        <img src="projects.svg" alt="" className="w-60 h-60" />
      </section>

      <div className="mb-24">
        <Heading title="Latest projects I have worked on" />
        <Projects />
      </div>

      <section className="text-white text-3xl mb-36 bg-accent flex items-center justify-center">
        <h2 className="text-center">About</h2>
        <img src="about.svg" alt="" className="w-60 h-60" />
      </section>

      <div className=" mt-24 flex items-center gap-x-96">
        <div className="space-y-8">
          <h2 className="text-white">About me</h2>
          <p className="text-2xl leading-relaxed text-white">
            I am a software developer with a strong focus on frontend
            technologies. I am passionate about writing clean, maintainable code
            and staying up-to-date with the latest trends in frontend
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
      <section className="text-white text-3xl mb-36 bg-accent flex items-center justify-center">
        <h2 className="text-center">Contact</h2>
        <img src="contact.svg" alt="" className="w-60 h-60" />
      </section>
      <div className="mt-36">
        <Heading title="Get in Touch!" />
        <p className="text-center mb-8 text-white">
          If you have any questions or a proposal, feel free to send me a
          message!
        </p>
        <div className="flex justify-center">
          <a href="mailto:538ser@gmail.com">
            <button className="flex items-center gap-2 text-white bg-primary px-20 py-4 rounded-md text-black">
              Send
              <FaEnvelope className="text-xl " />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// TODO notificacion de descarga de cv y envio form. Tamano de parrafo en form
