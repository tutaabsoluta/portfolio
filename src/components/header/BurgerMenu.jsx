import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { DivisionLine, Socials } from "../utils/";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-neutral">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              ? "fixed top-0 right-0 min-w-56 h-screen bg-white dark:bg-secondary z-50"
              : "hidden"
          }`}
        >
          <div className="flex items-center justify-center gap-16 mt-12">
            <h3 className="uppercase text-xs tracking-widest text-primary">
              Navigation
            </h3>
            <button className="text-white" onClick={onToggle}>
              <IoCloseSharp />
            </button>
          </div>
          <ul className="font-medium flex flex-col items-start justify-center h-full space-y-6 ml-8 -mt-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-terciary md:dark:hover:text-optional hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#work"
                className="block py-2 px-3 text-terciary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-terciary md:dark:hover:text-optional hover:scale-105 transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase text-xs tracking-widest"
              >
                Work
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-terciary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-terciary md:dark:hover:text-optional hover:scale-105 transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase text-xs tracking-widest"
              >
                About
              </a>
            </li>
            <DivisionLine className={"w-[85%]"} />
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-terciary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-terciary md:dark:hover:text-optional hover:scale-105 transition-all duration-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase text-xs tracking-widest"
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
