import { Palette, PenTool, Zap } from "lucide-react";

type Skill = {
  name: string;
  percent: number;
};

const front: Skill[] = [
    { name: "HTML", percent: 98 },
    { name: "React & Next.js", percent: 95 },
    { name: "Modern CSS & Web Animation", percent: 93 },
    { name: "Bootstrap & Tailwind", percent: 90 },
    { name: "JavaScript & TypeScript", percent: 80 },
];

const back: Skill[] = [
    { name: "CSharp & Java", percent: 70 },
    { name: "MySql & Access", percent: 65 },
    { name: "C", percent: 60 },
    { name: "NodeJs & Php", percent: 55 },
    { name: "Express.js", percent: 25 },
];

const tools: Skill[] = [
    { name: "Visual Studio & Code", percent: 99 },
    { name: "Microsoft Office", percent: 95 },
    { name: "Git & GitHub", percent: 90 },
    { name: "XAMPP & WAMPP ", percent: 85 },
    { name: "NetBeans", percent: 80 },
    
];

const ExperienceCard = () => {
  return (
    <section className="w-full experience-cards px-5 mt-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
        <div className="w-full max-w-sm p-6 bg-[#00191E] rounded-2xl shadow shadow-[#003B3B]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <Palette className="text-purple-500 w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Frontend</h3>
            </div>

            {/* Front */}
            <div className="space-y-4">
                {front.map((skill, index) => (
                <div key={index}>
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${skill.percent}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
        </div>

        <div className="w-full max-w-sm p-6 bg-[#00191E] rounded-2xl shadow shadow-[#003B3B]">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <Zap className="text-blue-500 w-6  h-6" />
                <h3 className="text-lg font-bold text-white">Backend</h3>
            </div>

            {/* Back */}
            <div className="space-y-4">
                {back.map((skill, index) => (
                <div key={index}>
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${skill.percent}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    <div className="w-full max-w-sm p-6 bg-[#00191E] rounded-2xl shadow shadow-[#003B3B]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <PenTool className="text-red-500 w-6 h-6" />
        <h3 className="text-lg font-bold text-white">Ferramentas</h3>
      </div>

      {/* Tools */}
      <div className="space-y-4">
        {tools.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 rounded-full"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
export default ExperienceCard