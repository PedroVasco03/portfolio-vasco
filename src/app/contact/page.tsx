import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

const Contact = () => {
    if (isMaintenance) {
        redirect("/dev");
      }else{
    return(
        <>
            <h1>Pagina de contacto</h1>
        </>
    )
}
}

export default Contact