import { Project } from "@/types/project";

export const projects:Project[] = [
  {
    id: 1,
    name: 'Iron Gate',
    description: 'Empresa especializada na manutenção de portas de enrolar industriais, oferecendo serviços preventivos, corretivos e substituição de peças com foco em segurança, durabilidade e eficiência operacional.',
    thumbnail: '/projects/iron-gate.png',
    url: 'https://iron-gate.vercel.app/',
    stacks: [
      {
        id: 1,
        name: 'HTML'
      },
      {
        id: 2,
        name: 'CSS'
      },
      {
        id: 3,
        name: 'Javascript'
      },
    ]
  },
  {
    id: 2,
    name: 'Gusto',
    thumbnail: '/projects/gusto.png',
    description: 'Pizzaria que combina tradição italiana com um toque contemporâneo, oferecendo pizzas artesanais feitas com ingredientes selecionados e assadas em forno a lenha.',
    url: 'https://gusto-zeta.vercel.app/',
    stacks: [
      {
        id: 1,
        name: 'NextJs'
      }
    ]
  },
]