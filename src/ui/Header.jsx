import { Link } from "react-router-dom";
import { Button } from "../components";

export const Header = () => {
  return (
    <header className="flex mt-16 z-0">
      {/* Content */}
      <div className="w-1/2 space-y-6">
        <p className="uppercase text-primary font-bold">Software Developer</p>
        <h1>Hello, my name is Sergio Duran</h1>
        <p>
          I am a software developer with a strong focus on frontend
          technologies. I am passionate about writing clean, maintainable code
          and staying up-to-date with the latest trends in frontend development.
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
