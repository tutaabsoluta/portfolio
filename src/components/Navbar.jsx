import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container mx-auto mt-8 relative z-20">
      <div className="flex justify-between">
        <p className="text-xl">Sergio Duran</p>

        <div className="flex gap-12">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-xl ${isActive ? "underline" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-xl ${isActive ? "underline" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-xl ${isActive ? "underline" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};


