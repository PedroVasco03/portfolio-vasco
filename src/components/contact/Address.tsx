"use client";
import { useState } from "react";
import type { AddressItem } from "./types";


interface AddressProps {
  item: AddressItem;
}

const Address: React.FC<AddressProps> = ({ item }) => {
  const [hover, setHover] = useState(false);

  const Icon = item.icon;

  return (
    <div
      className="max-w-84 my-3 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px]  hover:scale-[1] duration-450 cursor-pointer hover:shadow-[#003B3B] shadow-[0_0_20px_#00191E] max-sm:mx-auto"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square ${
          hover ? "bg-[#5CF28E]" : "bg-[#00191E]"
        } center rounded-[4px] flex items-center justify-center`}
      >
        <Icon
          size={20}
          className={`${hover ? "text-[#00191E]" : "text-[#5CF28E]"}`}
        />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#fff] font-normal">
          {item?.title}:
        </p>
        <p className="text-[14px] md:text-[16px] text-gray-400 font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
