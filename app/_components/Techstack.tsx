import { skills, SkillsType } from "../_variables/Variables";

const shuffleArray = (array:SkillsType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledSkills = shuffleArray([...skills]);

export default function Techstack() {
  return (
    <main className="overflow-hidden mt-4 flex flex-col gap-4 relative">
      <div className="flex gap-3 w-fit animate">
        {skills.map((skill, index) => (
          <div key={index} className="flex px-4 py-2 gap-2 items-center bg-neutral-800 rounded-full">
            <div>{skill.icon}</div>
            <div>{skill.text}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 w-fit animate-reverse">
        {skills.map((skill, index) => (
          <div key={index} className="flex px-4 py-2 gap-2 items-center bg-neutral-800 rounded-full">
            <div>{skill.icon}</div>
            <div>{skill.text}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 w-fit animate">
        {shuffledSkills.map((skill, index) => (
          <div key={index} className="flex px-4 py-2 gap-2 items-center bg-neutral-800 rounded-full">
            <div>{skill.icon}</div>
            <div>{skill.text}</div>
          </div>
        ))}
      </div>
      <div className="tools"></div>
    </main>
  );
}
