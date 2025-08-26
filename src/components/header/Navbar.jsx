import { useState, useEffect } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Home, Briefcase, User, Mail } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scrollspy simple
      const sections = ["home", "work", "about", "contact"];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-20 transition-all duration-300
        ${
          scrolled
            ? "bg-secondary/50 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#">
          <img src="logo.webp" alt="Logo" className="h-20 w-auto" />
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {links.map(({ id, label, icon: Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center space-x-1 group"
            >
              <Icon size={20} className="text-primary" />

              <span className="text-terciary group-hover:text-primary transition-colors duration-300">
                {label}
              </span>
            </a>
          ))}
        </div>

        <div className="md:hidden fixed top-5 right-5">
          <BurgerMenu />
        </div>
      </div>
    </nav>
  );
};
