import React from "react";
import { ContactForm, Header } from "../ui";
import { Heading, Projects } from "../components";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-[-50px] mb-24">
        <Heading title="Projects" />
        <Projects />
      </div>

      <Heading title='Contact'/>
      <ContactForm />
      

    </div>
  );
};
