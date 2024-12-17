import { learningSkills,otherSkills, skills } from "../data/data";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <div className="flex items-center justify-center gap-24">
      <div>
        <h5 className="text-terciary mb-8 text-center">Using Now</h5>
        <div className="grid grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard image={skill.image} title={skill.title} />
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-terciary mb-8 text-center">Learning</h5>
        <div className="grid grid-cols-2 gap-6">
          {learningSkills.map((learning) => (
            <SkillCard image={learning.image} title={learning.title} />
          ))}
        </div>
      </div>
      {/* <div>
        <h5 className="text-terciary mb-8 text-center">Other skills</h5>
        <div className="grid grid-cols-2 gap-6">
          {otherSkills.map((other) => (
            <SkillCard image={other.image} title={ other.title } />
          ))}
        </div>
      </div> */}
    </div>
  );
};
