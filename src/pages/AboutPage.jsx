import { Button } from "../components";

export const AboutPage = () => {
  return (
    <div className="container mx-auto mt-24 flex items-center gap-x-96">
      <div className="space-y-8">
        <h2>About me</h2>
        <p className="text-2xl leading-relaxed">
          I am a software developer with a strong focus on frontend
          technologies. I am passionate about writing clean, maintainable code
          and staying up-to-date with the latest trends in frontend development.
        </p>
        <Button text="Resume" className="bg-primary" />
      </div>

      <div className="relative">
        {/* BG Image */}
        <img src="selfie-bg.png" alt="Background Color" className="max-w-md" />

        {/* Selfie */}
        <img
          src="selfie.webp"
          alt="Selfie Image"
          className="absolute top-0 left-0 max-w-md"
          style={{
            WebkitMaskImage: "url('selfie-bg.png')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "cover",
            maskImage: "url('selfie-bg.png')",
            maskRepeat: "no-repeat",
            maskSize: "cover",
          }}
        />
      </div>
    </div>
  );
};
