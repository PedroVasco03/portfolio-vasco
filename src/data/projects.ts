// data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;   // caminho no /public ou link externo
  url?: string;    // link para ver online
  repo?: string;   // link do GitHub
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    description: "Meu site de portfólio feito em Next.js e TailwindCSS.",
    image: "/images/portfolio.png",
    url: "https://meuportfolio.vercel.app",
    repo: "https://github.com/usuario/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Demo",
    description: "Loja virtual fictícia com carrinho e checkout.",
    image: "/images/ecommerce.png",
    url: "https://ecommerce-demo.vercel.app",
    repo: "https://github.com/usuario/ecommerce-demo",
  },
  {
    id: 3,
    title: "API de Tarefas",
    description: "API REST para gerenciar tarefas com autenticação JWT.",
    image: "/images/api.png",
    repo: "https://github.com/usuario/api-tarefas",
  },
];
