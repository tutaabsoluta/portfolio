import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="container mx-auto mt-8 relative z-20" >
      <div className="flex justify-between items-center">
        <Link to='/'>
          <p className="text-[18px]">Sergio Duran</p>
        </Link>

        <div className="flex gap-12 items-center">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-[18px] transition duration-300 ease-in-out ${isActive ? "underline" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-[18px] transition duration-300 ease-in-out ${isActive ? "underline" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-[18px] transition duration-300 ease-in-out ${isActive ? "underline" : ""}`
            }
          >
            Contact
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
