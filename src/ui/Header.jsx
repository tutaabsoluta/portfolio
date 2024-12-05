import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  return (
    <header className="flex mt-16 z-0">
      {/* Content */}
      <div className="w-1/2 space-y-6">
        <h1 className="leading-[60px]">Hello, my name is <span className="text-primary">Sergio.</span></h1>
        <p>
          I'm an <span className="text-primary font-bold">software developer</span> from San Jose, Costa Rica.
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

      {/* Images */}
      <div className="relative w-1/2 -top-32 -right-10">
        {/* Background Image */}
        <img src="yellow-bg.png" alt="Background Color" className="w-full" />

        {/* Selfie Image */}
        <img
          src="selfie.png"
          alt="Selfie Image"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            WebkitMaskImage: "url('yellow-bg.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: "url('yellow-bg.png')",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
      </div>
    </header>
  );
};
