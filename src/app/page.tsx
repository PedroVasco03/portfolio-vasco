import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Profession from "@/components/profession/Profession";
import WorkTogether from "@/components/workTogether/WorkTogether";
import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";


export default function Home() {
  if (isMaintenance) {
    redirect("/dev");
  }else{
    return (
      <>
        <Hero/>
        <Profession/>
        <div className="bg-[#00191E]"><WorkTogether/></div>
        <Experience/>
        <Contact />
        
      </>
    );
  }
}


