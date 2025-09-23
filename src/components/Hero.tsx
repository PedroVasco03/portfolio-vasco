import Image from "next/image"
import { Atom, Trophy, Zap} from 'lucide-react';
import HeroIMG from "../../public/images/I.jpg"
import Link from "next/link"
import Button from "./UI/Button"

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-inner">
            <div className="left-content">
                <div className="hero-txt">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Olá, sou Pedro Vasco<br /> <span className="text-[#50C878]">Desenvolvedor Web</span></h1>
                    <p className="text-lg md:text-xl text-white/70 lg:text-2xl mb-6">Crio interfaces modernas e funcionais com React, Next.js e Tailwind,
  transformando ideias em experiências digitais rápidas, acessíveis e
  elegantes.</p>
                   
                </div>
                <div className="hero-btns">
                    <Link href="/">
                        <Button variant="primary">Meus projetos</Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="secondary">Vamos Conversar</Button>
                    </Link>
                </div>
            </div>
            

            <div className="right-content mx-auto max-w-md  rounded-xl   md:max-w-2xl">
                <div className="hero-img md:shrink-0" aria-hidden>
                    <Image src={HeroIMG} alt="Hero" className="img h-48 w-full object-cover md:h-full md:w-48"/>
                    <div className="hero-card primeiro">
                        <Atom className="icon animate-spin-slow" size={32} strokeWidth={1.5} color="#50C878" />
                    </div>
                    
                    <div className="hero-card segundo">
                        <Trophy className="icon " size={22} strokeWidth={1.5} color="#50C878" />
                        <small>Téc. de Informática</small>
                    </div>
                    
                    <div className="hero-card terceiro">
                        <Zap className="icon " size={22} strokeWidth={1.5} color="#50C878" />
                        <small >Do conceito ao deploy, Código limpo, impacto real. <br /> Programar é criar futuros, Devs constroem o amanhã. </small> 
                        
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
    </section>
  )
}
export default Hero