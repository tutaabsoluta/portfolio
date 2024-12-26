import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { DivisionLine, Socials } from "../utils/";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-neutral">
      <div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 md:w-10 md:h-10 justify-center text-sm  rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen
              ? "fixed top-0 right-0 min-w-full xl:min-w-56 h-screen bg-secondary z-50"
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-between xl:justify-center px-8 xl:px-0 xl:gap-16 mt-12">
            <h3 className="uppercase text-xs tracking-widest text-primary">
              Navigation
            </h3>
            <button className="text-white" onClick={onToggle}>
              <IoCloseSharp />
            </button>
          </div>
          <ul className="font-medium flex flex-col items-start justify-center h-full space-y-6 ml-8 -mt-16 xl:-mt-8">
            <li>
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-terciary hover:text-optional hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#work"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-terciary hover:text-optional hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Work
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-terciary hover:text-optional hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                About
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-terciary hover:text-optional hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Contact
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <Socials />
          </ul>
        </div>
      </div>
    </nav>
  );
};
