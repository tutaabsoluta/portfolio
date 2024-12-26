import { AboutInfo } from "./components/about";
import { Footer } from "./components/footer";
import { Header, Navbar } from "./components/header";
import { Projects } from "./components/projects";
import { DivisionLine  } from "./components/utils";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <DivisionLine className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"} />
      <Projects />
      <DivisionLine className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"} />
      <AboutInfo />
      <DivisionLine className={"w-[300px] md:w-[600px] xl:w-[1100px] mx-auto"} />
      <Footer />
    </>
  );
}

export default App;

// TODO: Animaciones. Form: validar, captcha, nodemail. Semantic tags (navbar) revisar tipografias y paddings de divs relativos
