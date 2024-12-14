import {  Header } from "../ui";
import { Heading, Projects } from "../components";


export const HomePage = () => {
  return (
    <div className="">
      <Header />


      <div className="bg-terciary p-24">
      <h2 className="text-center mb-20">Latest projects I have worked on</h2>
      <Projects />

      </div>

      <Heading title1={"A little bit"} span={"about"} title2={"me"} />

      <div className="flex items-center max-w-3xl mx-auto">
        <div className="space-y-4 max-w-md">
          <p className="text-sm leading-relaxed text-terciary">
            Hello, my name is Sergio, and I am a software developer specializing
            in <span className="text-primary">Frontend development</span>. While
            my academic background is in agronomy, it was during my research
            projects, where I used tools like{" "}
            <span className="text-primary">R</span> and{" "}
            <span className="text-primary">Python</span> for {""}
            <span className="text-primary">statistical analysis</span>, that I
            discovered my interest in programming.
          </p>
          <p className="text-sm leading-relaxed text-terciary">
            These early experiences with{" "}
            <span className="text-primary">script development</span> and {""}
            <span className="text-primary">process automation</span> sparked my
            curiosity about the world of {""}
           software development, leading
            me to explore and fully dedicate myself to this exciting career.
          </p>
          <p className="text-sm leading-relaxed text-terciary">
            I am currently seeking my first professional opportunity in{" "}
            <span className="text-primary">software development</span>. I am
            eager to join a team where I can contribute to creating{" "}
            <span className="text-primary">user-centric web applications</span>{" "}
            while continuing to grow as a developer.
          </p>

          <p className="text-sm leading-relaxed text-terciary">
            In the meantime, I dedicate my time to creating{" "}
            <span className="text-primary">personal projects</span> that allow
            me to apply and strengthen my knowledge, while also learning new{" "}
            technologies tools to stay up-to-date in the field.
          </p>
        </div>

        <div className="relative  mx-auto">
          {/* BG Image */}
          <img
            src="selfie-bg.svg"
            alt="Background Color"
            className="w-full max-w-[16rem] object-contain"
          />

          {/* Selfie */}
          <img
            src="selfie.webp"
            alt="Selfie Image"
            className="absolute top-0 left-0 w-full max-w-[16rem] object-contain"
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

      <div className="mt-36">

      </div>
    </div>
  );
};
