import React from "react";
import { Header } from "../ui";
import { Projects } from '../components'

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-[-50px]">
        <h2 className="text-center font-bold tracking-tight">Projects</h2>
        <div className="w-[100px] h-[5px] bg-primary container mx-auto rounded-md mt-6 mb-12"></div>
      </div>

      <Projects />
    </div>
  );
};
