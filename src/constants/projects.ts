import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "Bookly",
    description:
      "Projeto para gerenciamento de livros que o usuário já leu, tem interesse, e está lendo.",
    thumbnail: "/projects/bookly.png",
    url: "https://bookly-kappa-nine.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Cypress",
      },
      {
        id: 3,
        name: "Node",
      },
      {
        id: 4,
        name: "Drizzle Orm",
      },
      {
        id: 5,
        name: "Postgres SQL",
      },
    ],
  },
  {
    name: "Iron Gate",
    description:
      "Empresa especializada na manutenção de portas de enrolar industriais, oferecendo serviços preventivos, corretivos e substituição de peças com foco em segurança, durabilidade e eficiência operacional.",
    thumbnail: "/projects/iron-gate.png",
    url: "https://iron-gate.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "Javascript",
      },
    ],
  },
  {
    name: "Gusto",
    thumbnail: "/projects/gusto.png",
    description:
      "Pizzaria que combina tradição italiana com um toque contemporâneo, oferecendo pizzas artesanais feitas com ingredientes selecionados e assadas em forno a lenha.",
    url: "https://gusto-zeta.vercel.app/",
    stacks: [
      {
        id: 1,
        name: "NextJs",
      },
    ],
  },
];
