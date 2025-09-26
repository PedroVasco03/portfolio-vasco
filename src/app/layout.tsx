import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Portfólio - Pedro Vasco",
  description: "Desenvolvido por Pedro Vasco",
  icons: {
    icon: "/images/logo.png", 
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt">
      <head />
      <body className="flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
