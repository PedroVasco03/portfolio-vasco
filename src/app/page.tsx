import Image from "next/image";
import { redirect } from "next/navigation";
import RootLayout from "./layout";
import HomePage from "./home/Page";

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";


export default function Home() {
  if (isMaintenance) {
    redirect("/dev");
  }else{
    return (
      <RootLayout>
          <HomePage/>
      </RootLayout>
    );
  }
}
