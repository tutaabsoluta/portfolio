import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  return (
    <header className="flex items-center mt-40 justify-center mb-48">
      {/* Content */}
      <div className="space-y-10 text-center flex flex-col items-center">
        <h1 className="leading-[80px] text-white">
          Hello, my name is <span className="text-primary">Sergio Duran.</span>
        </h1>
        <p className="text-white text-xl max-w-md">
          I'm a{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica, who likes to build web applications and learn new things everyday!
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="projects">
            <Button className="bg-primary text-white" text={"Projects"} />
          </Link>

          <a
            href="https://www.linkedin.com/in/sergio-durán-018071260"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white outline outline-1" text={"Linkedin"} />
          </a>
        </div>
      </div>
    </header>
  );
};
