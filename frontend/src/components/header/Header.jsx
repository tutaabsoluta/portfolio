import { motion } from "framer-motion";
import { Button } from "..";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header
      className="relative flex items-center justify-center h-screen -mt-28 md:-mt-20 mb-12 md:mb-0"
      id="home"
    >
      {/* Content */}
      <div className="space-y-6 px-8 md:px-0 flex flex-col items-start md:items-center">
        <motion.h1
          className="text-terciary leading-tight"
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Hello, I'm {""} <br className="block md:hidden" />
          <span className="font-bold text-primary">Sergio Duran</span>
        </motion.h1>

        <motion.p
          className="text-terciary text-xl md:text-center max-w-lg"
          initial={{ opacity: 0, y: "20%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I'm a passionate{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica, dedicated to building innovative and
          efficient web solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Button
            toSection={"#contact"}
            text={`Let's talk!`}
            ariaLabel={"Lets talk!"}
          />
        </motion.div>
      </div>

      <motion.div
        className="flex items-center gap-2 absolute md:right-24 bottom-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <a href="#work">
          <button
            className="flex items-center gap-2 group"
            aria-label="Scroll down"
          >
            <IoIosArrowDown
              className="w-8 h-8 md:w-auto md:h-auto text-terciary group-hover:scale-125 group-hover:text-primary transition-all duration-500"
              aria-hidden="true"
            />
            <span className="hidden md:block text-terciary uppercase text-[10px] tracking-widest group-hover:text-primary transition-colors duration-500">
              Scroll down
            </span>
          </button>
        </a>
      </motion.div>
    </header>
  );
};
