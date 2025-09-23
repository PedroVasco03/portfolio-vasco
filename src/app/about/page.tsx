import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const About = () =>{
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <>
            <h1>About me --- Page</h1>
        </>
    )
}
}

export default About