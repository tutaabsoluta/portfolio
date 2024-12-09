import { Button, Education, Heading, SkillCard } from "../components";
import { learningSkills, otherSkills, skills } from "../data";

export const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" mt-24 flex items-center gap-x-96">
          <div className="space-y-8">
            <h2 className="text-white">About me</h2>
            <p className="text-2xl leading-relaxed text-white">
              I am a software developer with a strong focus on frontend
              technologies. I am passionate about writing clean, maintainable
              code and staying up-to-date with the latest trends in frontend
              development.
            </p>
            <Button text="Resume" className="bg-primary" />
          </div>

          <div className="relative">
            {/* BG Image */}
            <img
              src="selfie-bg.svg"
              alt="Background Color"
              className="max-w-md"
            />

            {/* Selfie */}
            <img
              src="selfie.webp"
              alt="Selfie Image"
              className="absolute top-0 left-0 max-w-md"
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

        <div className="mt-16 mb-24">
          <Heading title={"Skills"} />
          {/* <h3 className="uppercase mb-20">Using Now:</h3> */}
          <div className="flex justify-between items-center gap-12">
            <div>
              <div className="grid grid-cols-4 place-items-center gap-16">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    title={skill.title}
                    image={skill.image}
                  />
                ))}
              </div>
            </div>

            {/* <h3 className="uppercase my-20">Learning:</h3> */}
            <div>
              <div className="grid grid-cols-2 place-items-center gap-16">
                {learningSkills.map((learning) => (
                  <SkillCard
                    key={learning.id}
                    title={learning.title}
                    image={learning.image}
                  />
                ))}
              </div>
            </div>

            {/* <h3 className="uppercase my-20">Other skills:</h3> */}
            <div>
              <div className="grid grid-cols-2 place-items-center gap-16">
                {otherSkills.map((other) => (
                  <SkillCard
                    key={other.id}
                    title={other.title}
                    image={other.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Education />
      </div>
    </>
  );
};
