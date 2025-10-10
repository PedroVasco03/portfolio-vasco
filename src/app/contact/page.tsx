import ContactSection from "@/components/contact/Contact";
import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

const Contact = () => {
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <section className="section container flex items-center justify-center">
            <ContactSection/>
        </section>
    )
}
}

export default Contact