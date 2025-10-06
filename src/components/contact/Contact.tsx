"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../socialMedia/SocialMedia";
import type { AddressItem } from "./types";


const addressData: AddressItem[] = [
  {
    icon: MapPin,
    title: "Localização",
    description: "Cacuaco, Nova Urbanização",
  },
  {
    icon: Mail,
    title: "Meu Email",
    description: "baltazarpedro092@gmail.com",
  },
  {
    icon: Phone,
    title: "Ligue para mim",
    description: "+244 940-181-339",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="relative w-full pt-10 flex justify-center align-center  p-5   -bottom-15 -mt-15 ">
      <div
        className="content md:p-10 lg:p-22   bg-[#002329] rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex align-center  flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          {/* Left Section */}
          <div >
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#fff]">
                Vamos discutir o seu projeto
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-gray-400">
                Estou disponível para trabalhos freelance. 
                Entre em contato se tiver um projeto para o qual você acha que eu seria uma boa opção.
              </p>
            </div>

            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            
          </div>

          {/* Right Section (Form) */}
          <div className="w-full h-full  p-10">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-white lg:hidden text-center">
              Vamos discutir o seu Projecto
            </p>
            <Form />
            <div className="w-full flex justify-center mt-5 max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
