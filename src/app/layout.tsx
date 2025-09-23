import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portifolio Pedro Vasco",
  description: "Desenvolvido por Pedro Vasco",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt">
      <head />
      <body className="">
        <NavBar/>
          <main className="">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
