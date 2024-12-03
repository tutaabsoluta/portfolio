import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="container mx-auto mt-8 relative z-20">
      <div className="flex justify-between">
        <Link to='/'>
          <p className="text-[18px]">Sergio Duran</p>
        </Link>

        <div className="flex gap-12">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `text-[18px] ${isActive ? "underline" : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              `text-[18px] ${isActive ? "underline" : ""}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              `text-[18px] ${isActive ? "underline" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
