import { Header } from "../ui";
import { AboutInfo, Heading, Projects, Skills } from "../components";

export const HomePage = () => {
  return (
    <div>
      <Header />

      <div className="bg-terciary p-24 flex flex-col items-center">
        <h2 className="text-center mb-8">Latest projects I have worked on</h2>
        <p className="text-center mb-12 w-[600px]">
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
