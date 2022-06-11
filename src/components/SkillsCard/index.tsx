import { Skill } from "../../pages/About";

interface SkillsCardProps {
  skills: Skill[];
}

export const SkillsCard = ({ skills }: SkillsCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.title}
          className="w-[22.12rem] flex flex-col justify-start bg-brand-fullfil p-6 gap-3 rounded-lg"
        >
          <div>{skill.icon}</div>
          <h1 className="text-3xl font-medium">{skill.title}</h1>
          <p className="text-left">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};
