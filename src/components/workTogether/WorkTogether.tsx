import Button from "../UI/Button";

const WorkTogether = () => {
  return (
    <div className=" py-25 max-md:mb-10 mt-5 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Tem uma ideia de projeto? Vamos discutir o seu projeto!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          Estou sempre aberto a discutir novos projetos e ideias criativas. Vamos nos conectar e construir algo incrível juntos.
        </p>
         <Button className="mt-5 md:mt-12.5 md:py-3 md:px-6  max-md:mx-auto max-md:mb-5"><a href="https://www.linkedin.com/in/pedro-vasco-939342287/" target="_blank" rel="noopener noreferrer">Vamos trabalhar juntos 
         </a></Button>
               
      </div>
    </div>
  );
};

export default WorkTogether;
