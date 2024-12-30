import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { AboutInfo } from "./components/about";
import { Footer } from "./components/footer";
import { Header, Navbar } from "./components/header";
import { Projects } from "./components/projects";
import { DivisionLine, LoadingSpinner } from "./components/utils";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup para evitar errores si el componente se desmonta
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={ {opacity: 0} }
          transition={{ duration: 0.5, delay: 2.5 }}
          onAnimationComplete={() => setIsLoading(false)} 
        >
          <LoadingSpinner />
        </motion.div>
      ) : (
        <>
          <Navbar />
          <Header />
          <DivisionLine
            className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"}
          />
          <Projects />
          <DivisionLine
            className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"}
          />
          <AboutInfo />
          <DivisionLine
            className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;