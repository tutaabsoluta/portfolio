import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header
      className="relative flex flex-col items-center justify-center min-h-screen py-16 -mt-28 md:-mt-20 overflow-hidden"
      id="home"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Main content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Main text content */}
          <div className="space-y-6">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-terciary"
              initial={{ y: "30%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sergio Durán
            </motion.h1>

            <motion.div
              className="relative inline-block"
              initial={{ y: "30%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Full-Stack Developer</h2>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>

            <motion.p
              className="text-terciary text-base md:text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: "20%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Building seamless, user-centric web experiences with a strong focus on performance, accessibility, and scalable backend solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full text-primary hover:bg-primary/5 transition-colors"
                aria-label="Contact"
                
              >
                Let's talk
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute -z-10 left-0 top-1/4 max-w-xs hidden lg:block opacity-20" aria-hidden='true'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <pre className="text-primary text-xs">
              <code>{`function createExperience() {
  const skills = ['HTML', 'CSS', 
    'JavaScript', 'React',
     'Node', 'SQL'];
  
  return {
    persistent: true
    creative: true,
    driven: true,
    skills
  };
};`}</code>
            </pre>
          </motion.div>
        </div>

        <div className="absolute -z-10 right-0 bottom-1/4 max-w-xs hidden lg:block opacity-20" aria-hidden='true'>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <pre className="text-primary text-xs">
              <code>{`const portfolio = {
  name: 'Sergio Duran',
  role: 'Web Developer',
  goal: 'Creating amazing
    user experiences',
  contact: () => {
    // Let's connect!
  }
};`}</code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="flex items-center gap-2 absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <a href="#work" className="group">
          <div className="flex flex-col items-center gap-2">
            <span className="text-terciary uppercase text-xs tracking-widest group-hover:text-primary transition-colors duration-300">
              Scroll down
            </span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <IoIosArrowDown className="w-6 h-6 text-primary" aria-hidden="true" />
            </motion.div>
          </div>
        </a>
      </motion.div>
    </header>
  );
};
