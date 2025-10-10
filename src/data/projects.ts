export type Project = {
  id: number;
  title: string;
  tecnologia: string;
  description: string;
  image: string;
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Mirantes",
    tecnologia: "React.js, TailwindCSS",
    description: "Mirantes Clone. 2025. Projeto de estudo e prática.",
    image: "/images/proj1.png",
    url: "https://mirantes-clone.vercel.app",
    repo: "https://github.com/PedroVasco03/mirantes-clone",
  },
  {
    id: 2,
    title: "abc na Cozinha",
    tecnologia: "HTML, CSS, JS",
    description: "Site Ficticio de E-commerce de Comida. Projeto final do Unitel Code WEB 2022.",
    image: "/images/proj2.png", // usa imagem local
    url: "https://abc-na-cozinha.netlify.app/",
    repo: "https://github.com/PedroVasco03/projeto-final-code-web",
  },
  {
    id: 3,
    title: "SD Distribuidora",
    tecnologia: "Next.js, CSS, Axios, TypeScript",
    description: "Sistema ficticio de distribuidora de água. Desenvolvida para defesa de final de ensino médio em 2023.",
    image: "/images/proj4.png",
    url: "https://sd-distribuidora-n13.vercel.app/",
    repo: "https://github.com/PedroVasco03/sd-distribuidora-n13",
  },
  {
    id: 4,
    title: "No Play",
    tecnologia: "HTML, CSS, JS",
    description: "Projeto Ficticio de uma Plataforma voltada ao desenvolvimento do futebol nacional. Praticando desenvolvimento web responsivo em 2023.",
    image: "/images/proj3.png",
    url: "https://noplay.netlify.app/",
    repo: "https://github.com/PedroVasco03/No-Play-frontend",
  },
  {
    id: 5,
    title: "IPIL Digital",
    tecnologia: "Next.js, Bootstrap, Express, MySQL",
    description: "sistema de gestão das coordenações e secretarias do IPIL. Projeto final de ensino medio.",
    image: "/images/proj5.png",
    repo: "https://github.com/PedroVasco03/client",
  },
  {
    id: 6,
    title: "Tela de login",
    tecnologia: "React.js, CSS",
    description: "Pratica de Design responsivo com CSS puro.",
    image: "/images/proj6.png",
  },
  {
    id: 7,
    title: "Tela de login",
    tecnologia: "React.js, CSS",
    description: "Pratica de Design responsivo com CSS puro.",
    image: "/images/proj7.png",
  },
  {
    id: 8,
    title: "SB Padaria",
    tecnologia: "C#, Bunifu UI, MySQL, Guna UI",
    description: "Projecto de sistema de gestão para padarias. Projeto de estudo e prática.",
    image: "/images/proj8.png",
    repo: "https://github.com/PedroVasco03/Padaria",
  },
  {
    id: 9,
    title: "SG Vendas",
    tecnologia: "Java, MySQL",
    description: "Projeto de sistema de gestão de vendas. Projeto de estudo e prática universitário.",
    image: "/images/proj9.png",
  },
  {
    id: 10,
    title: "PDT Store",
    tecnologia: "C#, Bunifu UI, MySQL, Guna UI",
    description: "Projeto de sistema de gestão para lojas virtuais. Projeto de estudo e prática.",
    image: "/images/proj10.png",
    repo: "https://github.com/PedroVasco03/Loja-Virtual-CSharp-final",
  },
  {
    id: 11,
    title: "Tela de login",
    tecnologia: "C#, Bunifu UI, MySQL, Guna UI",
    description: "Tela de login desenvolvida em C# & Bunifu UI com design chamativo.",
    image: "/images/proj11.png",
  },
];
