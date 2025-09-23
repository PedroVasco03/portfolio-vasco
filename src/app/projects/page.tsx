import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const Projects = () => {
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <>
            <h1>
                Projects --- Page
            </h1>
        </>
    )
}
}

export default Projects