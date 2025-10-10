import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import Image from "next/image";
import { Download } from "lucide-react";
import person from "../../../public/images/I.jpg";

const Profile: React.FC = () => {
  return (
    <div className="relative w-full  flex justify-center align-center  p-5   -bottom-15 -mt-15 ">
      <div
        className="content md:p-10 lg:p-22   bg-[#002329] rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="profile"
      >
        <div className="flex max-md:flex-col justify-between items-center gap-6">
          {/* Profile image */}
          <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 flex flex-col items-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-xl lg:w-80 lg:h-80
                xl:w-96 xl:h-96 overflow-hidden shadow-lg">
              <Image
                src={person}
                alt="Profile picture"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Social media section */}
            <div className="relative bottom-9">
              <div className="flex justify-center">
                <div className="px-3 max-w-auto py-3 z-50 text-center rounded-[10px] bg-[#00191E] center shadow-2xl drop-shadow-2xl ">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:w-full w-[33rem]">
            <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8">
              Eu sou um Desenvolvedor Júnior
            </h2>

            <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
              <p>
                Desenvolvedor Júnior focado em criar interfaces modernas e 
                funcionais, unindo design, performance e boas práticas de código.
              </p>
              <p className="mt-3">
                Atuo no desenvolvimento front-end com React e TypeScript, 
                transformando ideias em experiências digitais intuitivas e responsivas.
              </p>
            </div>

            <div className="mt-8 max-sm:pb-5 flex max-md:justify-center">
              <a
                className="btn xxs:btn-lg px-8 py-3 max-xs:px-2 rounded-[5px] text-[#000] xxs:py-3 bg-[#5CF28E] text-xs xxs:text-[14px] sm:text-[16px]"
                href="/projects"
              >
                Projectos
              </a>
              <a
                className="xxs:btn-lg px-8 py-3 max-xs:px-2 xxs:py-3 rounded-[5px] border border-gray-300 hover:border-[#5CF28E] duration-300 transition-all hover:text-[#5CF28E] ms-4 text-xs xxs:text-[14px] sm:text-[16px] flex items-center gap-2"
                href="/CV.pdf"
              >
                <Download className="w-4 h-4" />
                Baixar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
