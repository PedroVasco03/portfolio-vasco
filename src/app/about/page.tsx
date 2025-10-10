import Profile from "@/components/profile/Profile";
import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
const About = () =>{
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <section>
            <Profile/>
        </section>
    )
}
}

export default About