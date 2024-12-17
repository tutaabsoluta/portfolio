import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineContactPage } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

export const Navbar = () => {
  const [onLink, setOnLink] = useState(false);

  return (
    <nav className="w-full mx-auto p-5 relative z-20 border-b border-slate-800">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="text-[18px] text-primary/95 hover:text-secondary duration-300 font-bold">
            Sergio Duran
          </p>
          
        </Link>

        <div className="flex gap-12 items-center">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-[14px] transition text-terciary duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <div className="text-primary flex items-center gap-2">
              <FaLaptopCode />
              <p className="text-terciary">Projects</p>
            </div>
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${
                onLink ? "origin-left" : "origin-right"
              } group-hover:scale-x-100`}
            ></span>
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-[14px] transition text-terciary duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <div className="text-primary flex items-center gap-2">
              <IoMdInformationCircleOutline />
              <p className="text-terciary">About</p>
            </div>

            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${
                onLink ? "origin-left" : "origin-right"
              } group-hover:scale-x-100`}
            ></span>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-[14px] transition text-terciary duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <div className="text-primary flex items-center gap-2">
              <MdOutlineContactPage />
              <p className="text-terciary">Contact</p>
            </div>
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${
                onLink ? "origin-left" : "origin-right"
              } group-hover:scale-x-100`}
            ></span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
