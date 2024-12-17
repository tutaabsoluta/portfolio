import { Header } from "../ui";
import { AboutInfo, Heading, Projects, Skills } from "../components";

export const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="bg-slate-800 p-24 flex flex-col items-center">
        <h3 className="text-primary mb-4 uppercase tracking-wider text-sm">
          {`/ My work`}
        </h3>
        <h2 className="text-center mb-8 text-terciary">Latest projects I have worked on</h2>
        <p className="text-center mb-12 w-[600px] text-terciary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          et tenetur eveniet alias velit obcaecati necessitatibus beatae magnam
          hic tempora?
        </p>
        <Projects />
      </div>

      <AboutInfo />
    </div>
  );
};
