import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  return (
    <header className="flex mt-16 z-0">
      {/* Content */}
      <div className="w-3/5 space-y-6">
        <h1 className="leading-[60px]">Hello, my name is <span className="text-primary">Sergio.</span></h1>
        <p>
          I'm a <span className="text-primary font-bold">software developer</span> from San Jose, Costa Rica.
        </p>
        <div className="flex gap-4">
          <Link to="projects">
            <Button className="bg-primary" text={"Projects"} />
          </Link>

          <Link to="https://www.linkedin.com/in/sergio-durán-018071260">
            <Button className="bg-white outline outline-2" text={"Linkedin"} />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="w-2/5">
          <img src="web.svg" alt="Web Dev Header" />
      </div>
    </header>
  );
};
