import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  return (
    <header className="flex items-center mt-40 justify-center mb-48">
      {/* Content */}
      <div className="space-y-10 text-center flex flex-col items-center">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-white">
              Hello, I'm <span className="text-primary">Sergio Duran</span>
            </h1>
          </div>
          <div>
            <div className="relative w-20 h-20">
              {/* BG Image */}
              <img
                src="selfie-bg.svg"
                alt="Background Color"
                className="absolute top-0 left-0 w-full h-full"
              />

              {/* Selfie */}
              <img
                src="selfie.webp"
                alt="Selfie Image"
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  WebkitMaskImage: "url('selfie-bg.svg')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "cover",
                  maskImage: "url('selfie-bg.svg')",
                  maskRepeat: "no-repeat",
                  maskSize: "cover",
                }}
              />
            </div>
          </div>
        </div>
        <p className="text-white text-xl max-w-md">
          I'm a{" "}
          <span className="text-primary font-bold text-xl">
            software developer
          </span>{" "}
          from San Jose, Costa Rica, who likes to build web applications and
          learn new things everyday!
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="projects">
            <Button className="bg-primary" text={"Resume"} />
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
