import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";


export default function Home() {
  if (isMaintenance) {
    redirect("/dev");
  }else{
    return (
      <>
        <Hero/>
        <Experience/>
      </>
    );
  }
}


