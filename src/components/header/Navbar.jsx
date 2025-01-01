import { motion } from "framer-motion";
import { BurgerMenu } from "./BurgerMenu";
import { navbarAnimation } from "../../animations/motionConfig";

export const Navbar = () => {
  return (
    <motion.div 
      className="w-full mx-auto p-5 relative z-20"
      { ...navbarAnimation }
    >
      <div className="flex justify-between items-center">
        <div>
          <img src="logo.webp" alt="" className="h-20 w-full" />
        </div>

        <div className="fixed top-10 right-2 md:right-6">
         <BurgerMenu />
        </div>
      </div>
    </motion.div>
  );
};
