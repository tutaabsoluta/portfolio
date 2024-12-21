import { motion } from "framer-motion";
import { Button } from "../components";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header className="relative flex items-center justify-center h-screen -mt-20">
      {/* Content */}
      <div className="space-y-10 text-center flex flex-col items-center">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-terciary">
              Hello, I'm <span className="font-bold text-primary">Sergio Duran</span>
            </h1>
          </div>
        </div>
        <p className="text-terciary text-xl max-w-md">
          I'm a{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica that loves coding!
        </p>

        <div className="flex gap-4 justify-center">
          <Button text={`Let's talk!`} />
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <p className="left-6 fixed text-slate-500 vertical-text">
          © 2024 Sergio Duran - Almost all rights reserved.
          <div className="w-6 h-[1px] bg-slate-500 transform rotate-90 absolute right-0 -top-4"></div>
        </p>
      </div>

      <div className="flex items-center gap-2 absolute right-24 bottom-24">
        <button className="flex items-center gap-2 group">
          <IoIosArrowDown className="text-terciary group-hover:scale-125 group-hover:text-primary transition-all duration-500" />
          <span className="text-terciary uppercase text-[10px] tracking-widest group-hover:text-primary transition-colors duration-500">
            Scroll down
          </span>
        </button>
      </div>
    </header>
  );
};
