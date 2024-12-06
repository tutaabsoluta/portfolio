import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [onLink, setOnLink] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <nav className="container mx-auto mt-8 relative z-20" >
      <div className="flex justify-between items-center">
        <Link to='/'>
          <p className="text-[18px] text-primary font-bold">Sergio Duran</p>
        </Link>

        <div className="flex gap-12 items-center">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-[14px] transition duration-300 ease-in-out relative group ${isActive && 'font-bold'}`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">01.</span> About
            <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${onLink ? 'origin-left': 'origin-right'} group-hover:scale-x-100`}></span>
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-[14px] transition duration-300 ease-in-out relative group ${isActive && 'font-bold'}`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">02.</span> Projects
            <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${onLink ? 'origin-left' : 'origin-right'} group-hover:scale-x-100`}></span>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-[14px] transition duration-300 ease-in-out relative group ${isActive && 'font-bold'}`
            }
            onMouseEnter={() => setOnLink(true)}
            onMouseLeave={() => setOnLink(false)}
          >
            <span className="text-primary">03.</span> Contact
            <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-primary transform scale-x-0 transition-transform duration-[400ms] ${onLink ? 'origin-left' : 'origin-right'} group-hover:scale-x-100`}></span>
          </NavLink>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none p rounded-full peer dark:bg-gray-700 peer-checked:bg-slate-600">
              <span className={`absolute top-1 left-1 transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}>
                {darkMode ? <FaMoon className="text-white w-[11px]" /> : <FaSun className="text-white w-[13px]" />}
              </span>
            </div>

          </label>
        </div>
      </div>
    </nav>
  );
};
