import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { AboutInfo } from "./components/about";
import { Footer } from "./components/footer";
import { Header, Navbar } from "./components/header";
import { Projects } from "./components/projects";
import { DivisionLine, LoadingSpinner } from "./components/utils";
import { spinnerAnimation } from "./animations/motionConfig";

function App() {

  const divisionLineClasses = 'w-[300px] md:w-[600px] xl:w-[1100px] mx-auto';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          { ...spinnerAnimation }
          onAnimationComplete={() => setIsLoading(false)} 
        >
          <LoadingSpinner />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <Header />
          <DivisionLine
            className={divisionLineClasses}
          />
          <Projects />
          <DivisionLine
            className={divisionLineClasses}
          />
          <AboutInfo />
          <DivisionLine
            className={divisionLineClasses}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;