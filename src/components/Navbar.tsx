"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"

const NavBar = () => {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


    return(
        <nav className="navbar mb-5">
            <div className="nav-inner ">
                <div className="brand">
                  <div className="logo" aria-hidden>
                      PV
                  </div>
                  <div style={{ marginLeft: "6px" }} className="txt text-[#94a3b8]">I`M VASCO</div>
                </div>

                {/* botão só no mobile */}
                <button
                className="menu-toggle"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
                >
                ☰
                </button>

                {/* menu fixo fora do fluxo do flex */}
                <div className={`navB-links ${open ? "active" : ""}`}>
                    <Link href="/" className={pathname === "/" ? "text-[#5CF28E]" : "text-[#A8BFC0] hover:text-[#5CF28E]"+ " link"}  onClick={() => setOpen(false)}>
                        Inicio
                    </Link>
                    <Link href="/projects" className={pathname === "/projects" ? "text-[#5CF28E]" : "text-[#A8BFC0] hover:text-[#5CF28E]"+ " link"}  onClick={() => setOpen(false)}>
                        Projetos
                    </Link>
                    <Link href="/contact" className={pathname === "/contact" ? "text-[#5CF28E]" : "text-[#A8BFC0] hover:text-[#5CF28E]"+ " link"}  onClick={() => setOpen(false)}>
                        Contactos
                    </Link>
                    <Link href="/about" className={pathname === "/about" ? "text-[#5CF28E]" : "text-[#A8BFC0] hover:text-[#5CF28E]"+ " link"}  onClick={() => setOpen(false)}>
                        Sobre Mim
                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default NavBar