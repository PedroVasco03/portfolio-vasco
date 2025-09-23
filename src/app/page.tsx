import { redirect } from "next/navigation";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";


export default function Home() {
  if (isMaintenance) {
    redirect("/dev");
  }else{
    return (
      <><h1>Home Page</h1></>
    );
  }
}
