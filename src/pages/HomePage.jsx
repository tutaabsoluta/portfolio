import { AboutInfo } from '../components/about';
import { Footer } from '../components/footer';
import { Header, Navbar } from '../components/header';
import { Projects } from '../components/projects';
import { DivisionLine } from '../components/utils';



export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <DivisionLine />
      <Projects />
      <DivisionLine />
      <AboutInfo />
      <DivisionLine />
      <Footer />
    </div>
  );
};
