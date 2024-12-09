import React from "react";
import { ContactForm, Header } from "../ui";
import { Heading, PitchBanner, Projects } from "../components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />

      {/* <div className="mb-36">
        <div className="w-3/5">
          <PitchBanner />
        </div>
      </div> */}

      <div className="mt-[-50px] mb-24">
        <Heading title="Latest projects I have worked on" />
        <Projects />
      </div>
    </div>
  );
};

// TODO notificacion de descarga de cv y envio form. Tamano de parrafo en form
