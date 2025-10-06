import "./profession.css";
import Button from "../UI/Button";
import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Técnico de reparação",
    description:
      "Tenho experiência na resolução de falhas de hardware e software, manutenção preventiva, formatação, recuperação de sistemas e otimização de desempenho.",
  },
  {
    id: 2,
    title: "Desenvolvimento Desktop",
    description:
      "Desenvolvo aplicações desktop funcionais e seguras, com foco em desempenho, usabilidade e integração eficiente com sistemas e bases de dados.",
  },
  {
    id: 3,
    title: "Desenvolvimento Web",
    description:
      "Eu crio aplicativos web responsivos e de alto desempenho usando tecnologias modernas, garantindo acessibilidade, escalabilidade e manutenibilidade.",
  },
];

const Profession = () => {
  return (
    <div
      className="px-10 gap-10 max-xxl:w-full max-sm:pb-4 xxl:max-w-[1320px] xxl:mx-auto grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 "
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="md:font-semibold text-3xl sm:text-4xl md:text-5xl font-medium max-md:text-center">O que eu faço?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Sou <span className="bg-highlight">Especialista</span> em criar interfaces modernas, responsivas e intuitivas, 
            focadas na melhor experiência do usuário.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Minha abordagem combina criatividade e conhecimento técnico 
            para fornecer soluções que sejam visualmente atraentes e altamente 
            funcionais para os usuários.
          </p>
        </div>
          <Button className="mt-5 md:mt-12.5 md:py-3 md:px-6  max-md:mx-auto max-md:mb-5"><a href="https://www.linkedin.com/in/pedro-vasco-939342287/" target="_blank" rel="noopener noreferrer">Diga Ola!</a></Button>
       
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
