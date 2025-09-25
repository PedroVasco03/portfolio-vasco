import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer bg-[#00191E] pt-10 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 ">
                    <div className="lg:col-span-2 justify-center  text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            I`M<span className="text-[#50C878]"> VASCO</span>
                        </h2>
                        <p className="text-gray-400 mb-6 text-justify lg:w-sm">
                        A programação é mais do que escrever linhas de código, é transformar ideias em soluções reais, conectar pessoas através da tecnologia e criar experiências digitais que deixam impacto.</p>
                    </div>
                     <div className="flex justify-center  align-center m-auto lg:col-span-2  space-x-4">
                            <a href="https://www.facebook.com/Vasqueibo03" target="_blank" className="text-gray-400 h-6 w-6 hover:text-[#50C878] transition-colors">
                                <Facebook />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#!" className="text-gray-400 h-6 w-6 hover:text-[#60C878] transition-colors">
                                <Twitter />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://www.instagram.com/pedro_vasco03/" target="_blank" className="text-gray-400 h-6 w-6 hover:text-[#60C878] transition-colors">
                                <Instagram />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/pedro-vasco-939342287/" target="_blank" className="text-gray-400 h-6 w-6 hover:text-[#60C878] transition-colors">
                                <Linkedin />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://github.com/PedroVasco03"  target="_blank" className="text-gray-400 h-6 w-6 hover:text-[#50C878] transition-colors">
                                <Github  />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </div>
                    
                    </div>
                    
                    <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; 2025 - {currentYear} I`M VASCO. Todos direitos reservados.
                        </p>
                        <p>Desenvolvido por <a href="https://www.linkedin.com/in/pedro-vasco-939342287/" target="_blank" className="text-[#50C878] hover:underline">Pedro Vasco</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer