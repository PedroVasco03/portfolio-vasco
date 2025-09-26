"use client";
import Marquee from "react-fast-marquee";
import ExperienceCard from "./ExperienceCard";

import { 
  SiReact, SiNextdotjs,  SiTypescript, SiPhp, 
  SiNodedotjs, SiTailwindcss, SiBootstrap, SiCss3, 
  SiHtml5, SiSharp, SiC, SiMysql
} from "react-icons/si";

export const brandLogos = [
  { name: "React", icon: SiReact },
  { name: "NextJs", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "NodeJs", icon: SiNodedotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "CSS", icon: SiCss3 },
  { name: "HTML", icon: SiHtml5 },
  { name: "C#", icon: SiSharp },
  { name: "C", icon: SiC },
  { name: "MySQL", icon: SiMysql }
];



const Experience = () => {
  return (
    <div className="content py-0 md:py-25 flex flex-col max-md:mb-8 items-center px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10  text-center ">
        <h2 className="col-span-1 md:col-span-2 lg:col-span-3 md:font-semibold text-3xl sm:text-4xl md:text-5xl font-medium text-[#EAEAEA]  mb-6">Conhecimento Técnico</h2>
        <p className="col-span-1  text-[14px] sm:text-lg text-[#A9B5B5] font-normal h-full w-full text-justify">
          Tenho experiência em desenvolvimento web e desktop, 
          utilizando tecnologias como React, Next.js, Node.js e PHP. 
          Domino linguagens como Java, C, C#, TypeScript e JavaScript, 
          além de ferramentas de estilização como TailwindCSS, Bootstrap, 
          CSS e HTML. Também trabalho com bases de dados como MySQL e Access.
        </p>
        <Marquee pauseOnHover={true} speed={100} className="col-span-1 lg:col-span-2 h-full w-full flex justify-center items-center m-auto">
        <p className="flex  items-center ">
          {brandLogos.map(({ name, icon: Icon }) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={name}>
              <Icon className="w-10 h-10 text-[#50C878]" />
            </span>
          ))}
        </p>
      </Marquee>
      </div>
      
      <ExperienceCard/>
    </div>
  );
};

export default Experience;
