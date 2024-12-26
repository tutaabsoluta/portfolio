import { Button } from "..";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header
      className="relative flex items-center justify-center h-screen -mt-20"
      id="home"
    >
      {/* Content */}
      <div className="space-y-10 text-center flex flex-col items-center">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-terciary">
              Hello, I'm <br className="block md:hidden" />
              <span className="font-bold text-primary">Sergio</span>
            </h1>
          </div>
        </div>
        <p className="text-terciary text-xl max-w-md px-12 md:px-0">
          I'm a{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica that loves coding!
        </p>

        <Button text={`Let's talk!`} />
      </div>

      <div className="flex items-center gap-2 absolute md:right-24 bottom-24">
        <a href="#work">
          <button className="flex items-center gap-2 group">
            <IoIosArrowDown className="w-8 h-8 md:w-auto md:h-auto text-terciary group-hover:scale-125 group-hover:text-primary transition-all duration-500" />
            <span className="hidden md:block text-terciary uppercase text-[10px] tracking-widest group-hover:text-primary transition-colors duration-500">
              Scroll down
            </span>
          </button>
        </a>
      </div>
    </header>
  );
};
