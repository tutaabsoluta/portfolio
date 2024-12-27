import { Button } from "..";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header
      className="relative flex items-center justify-center h-screen -mt-28 md:-mt-20 mb-12 md:mb-0"
      id="home"
    >
      {/* Content */}
      <div className="space-y-6 px-8 md:px-0 flex flex-col items-start md:items-center">
        <h1 className="text-terciary leading-tight">
          Hello, I'm {""} <br className="block md:hidden" />
          <span className="font-bold text-primary">Sergio Duran</span>
        </h1>

        <p className="text-terciary text-xl md:text-center max-w-lg">
          I'm a passionate{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica, dedicated to building innovative and
          efficient web solutions.
        </p>

        <Button toSection={"#contact"} text={`Let's talk!`} />
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
