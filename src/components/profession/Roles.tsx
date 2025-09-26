"use client";
import { useEffect, useState } from "react";

interface Role {
  title: string;
  description: string;
}

interface RolesProps {
  role: Role;
}

const Roles: React.FC<RolesProps> = ({ role }) => {
  const [mouseHover, setMouseHover] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      console.log("Mouse entered on the: ", e.target);
    };

    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 xs:p-8 bg-[#00191E] hover:shadow-xl h-auto shadow-[#003B3B] ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-[#5CF28E] absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] max-sm:w-[5px]  ${
          mouseHover && "duration-200 w-[5px]"
        }`}
      />
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-white pb-4">
          {role?.title}
        </p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-400 ">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
