
import "./App.css";
import { AboutInfo } from "./components/about";
import { Footer } from "./components/footer";
import { Header, Navbar } from "./components/header";
import { Projects } from "./components/projects";
import { DivisionLine, LoadingSpinner } from "./components/utils";
import { ToastContainer } from "react-toastify";

function App() {
  const divisionLineClasses = "w-[300px] md:w-[600px] xl:w-[1100px] mx-auto";


  return (
    <>
      <>
        <Navbar />
        <Header />
        <DivisionLine className={divisionLineClasses} />
        <Projects />
        <DivisionLine className={divisionLineClasses} />
        <AboutInfo />
        <DivisionLine className={divisionLineClasses} />
        <Footer />
      </>
      <ToastContainer />
    </>
  );
}

export default App;
