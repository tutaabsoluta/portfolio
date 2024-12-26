import { BurgerMenu } from "./BurgerMenu";

export const Navbar = () => {
  return (
    <nav className="w-full mx-auto p-5 relative z-20">
      <div className="flex justify-between items-center">
        <a href="#">
          <img src="logo.png" alt="" className="hidden md:block h-20 w-full" />
        </a>

        <div>
         <BurgerMenu />
        </div>
      </div>
    </nav>
  );
};
