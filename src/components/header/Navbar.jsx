import { BurgerMenu } from "./BurgerMenu";

export const Navbar = () => {
  return (
    <div 
      className="w-full mx-auto p-5 relative z-20"
    >
      <div className="flex justify-between items-center">
        <div>
          <img src="logo.webp" alt="" className="h-20 w-full" />
        </div>

        <div className="fixed top-10 right-2 md:right-6">
         <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
