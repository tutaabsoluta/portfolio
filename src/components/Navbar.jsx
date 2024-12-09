import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {

  const [onLink, setOnLink] = useState(false);


  return (
    <nav className="container mx-auto mt-8 relative z-20">
      <div className="flex justify-between items-center">
        <Link to="/">
          <p className="text-[18px] text-primary/95 hover:text-primaryStrong duration-300 font-bold">
            Sergio Duran
          </p>
        </Link>

        <div className="flex gap-12 items-center">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-[14px] transition text-white duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">01.</span> About
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${
                onLink ? "origin-left" : "origin-right"
              } group-hover:scale-x-100`}
            ></span>
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-[14px] transition text-white duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">02.</span> Projects
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${
                onLink ? "origin-left" : "origin-right"
              } group-hover:scale-x-100`}
            ></span>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-[14px] transition text-white duration-300 ease-in-out relative group ${
                isActive && "font-bold"
              }`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">03.</span> Contact
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
