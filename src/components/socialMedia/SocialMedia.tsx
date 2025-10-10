import {
  Facebook,
  Instagram,
  Linkedin,
  Dribbble,
  Github,
  LucideIcon,
} from "lucide-react";

interface SocialItem {
  icon: LucideIcon;
  link: string;
}

const socialIcons: SocialItem[] = [
  { icon: Facebook, link: "https://www.facebook.com/Vasqueibo03" },
  { icon: Dribbble, link: "#!" },
  { icon: Instagram, link: "https://www.instagram.com/pedro_vasco03/" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/pedro-vasco-939342287/" },
  { icon: Github, link: "https://github.com/PedroVasco03" },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="flex gap-3 justify-center lg:justify-start ">
      {socialIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5CF28E] hover:bg-[#5CF28E] p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-[#00191E] rounded-md transition-colors duration-200 flex items-center justify-center"
          >
            <Icon  className=" text-xl w-4.5 aspect-square" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
