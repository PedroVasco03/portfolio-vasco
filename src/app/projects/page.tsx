import ProjectsSection from "@/components/project/ProjectSection";
import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const Projects = () => {
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <div
      className="content mt-5  mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="md:font-semibold text-3xl sm:text-4xl md:text-5xl font-medium max-md:text-center">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Aqui está uma seleção dos meus trabalhos recentes, mostrando minhas habilidades na criação de interfaces centradas no usuário e visualmente atraentes.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        
            <ProjectsSection />
      </div>
    </div>
    )
}
}

export default Projects