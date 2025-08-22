// Em: data/projects/golden-bear.ts

import { Project } from '../../lib/types';

export const getGoldenBearProject = (t: { [key: string]: any }): Project => ({
  id: 'golden-bear',
  title: 'Golden Bear Seguros',
  description: t.goldenBear.description,
  type: 'UX/UI',
  category: 'website',
  image: '/images/golden-bear/capa-golden.png',
  href: '/projetos/golden-bear',
  style: 4,
  content: [
    { type: 'image', src: '/images/golden-bear/header-bear.png', alt: t.goldenBear.capaAlt },
    {
      type: 'intro-grid', items: [
        { title: t.goldenBear.clientTitle, text: t.goldenBear.clientText },
        { title: t.goldenBear.objectiveTitle, text: t.goldenBear.objectiveText },
        { title: t.goldenBear.solutionTitle, text: t.goldenBear.solutionText },
        { title: t.goldenBear.roleTitle, text: t.goldenBear.roleText }
      ]
    },
    { type: 'heading', level: 2, text: t.goldenBear.content.businessTitle },
    { type: 'paragraph', text: t.goldenBear.content.businessP1 },
    { type: 'paragraph', text: t.goldenBear.content.businessP2 },

    { type: 'heading', level: 2, text: t.goldenBear.content.designProcessTitle },
    { type: 'image', src: '/images/golden-bear/processo de design.png', alt: 'Processo de Design' },
    
    { type: 'heading', level: 2, text: t.goldenBear.content.problemTitle },
    { type: 'paragraph', text: t.goldenBear.content.problemP1 },
    { type: 'paragraph', text: t.goldenBear.content.problemP2 },
    { type: 'image', src: '/images/golden-bear/pesquisa.png', alt: 'Dados de pesquisa do site antigo' },

    { type: 'heading', level: 2, text: t.goldenBear.content.ideationTitle },
    { type: 'paragraph', text: t.goldenBear.content.ideationP1 },
    { type: 'image', src: '/images/golden-bear/desk research.png', alt: 'Desk Research' },

    { type: 'heading', level: 2, text: t.goldenBear.content.audienceTitle },
    { type: 'image', src: '/images/golden-bear/publico.png', alt: 'Público-alvo' },

    { type: 'heading', level: 2, text: t.goldenBear.content.personasTitle },
    { type: 'image', src: '/images/golden-bear/personas.png', alt: 'Personas' },

    { type: 'heading', level: 2, text: t.goldenBear.content.benchmarkingTitle },
    { type: 'paragraph', text: t.goldenBear.content.benchmarkingP1 },
    { type: 'image', src: '/images/golden-bear/benchmarking.png', alt: 'Benchmarking' },

    { type: 'heading', level: 2, text: t.goldenBear.content.infoArchitectureTitle },
    { type: 'image', src: '/images/golden-bear/prioridades.png', alt: 'Arquitetura de Informação' },

    { type: 'heading', level: 2, text: t.goldenBear.content.sitemapTitle },
    { type: 'image', src: '/images/golden-bear/sitemap.png', alt: 'Sitemap' },

    { type: 'heading', level: 2, text: t.goldenBear.content.wireframeTitle },
    { type: 'image', src: '/images/golden-bear/wireframe.png', alt: 'Wireframes' },

    { type: 'heading', level: 2, text: t.goldenBear.content.prototypeTitle },
    { type: 'paragraph', text: t.goldenBear.content.prototypeDesktop },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINgIZxiSFTiLsRju8lUn3C%2FGolden-Bear%3Ftype%3Ddesign%26node-id%3D1-2%26t%3D3JZvtbpZTb6HENHe-1%26scaling%3Dscale-down-width%26page-id%3D0%253A1%26starting-point-node-id%3D174%253A119%26mode%3Ddesign' },
    { type: 'video', src: '/images/golden-bear/prototipo2.mp4' },
    
    { type: 'paragraph', text: t.goldenBear.content.prototypeMobile },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINgIZxiSFTiLsRju8lUn3C%2FGolden-Bear%3Ftype%3Ddesign%26node-id%3D28-7800%26t%3D97VbFPIda9DJH50E-1%26scaling%3Dscale-down%26page-id%3D28%253A7799%26mode%3Ddesign' },
    { type: 'video', src: '/images/golden-bear/prototipo-mobile.mp4' },
    
    { type: 'heading', level: 2, text: t.goldenBear.content.lessonsLearnedTitle },
    { type: 'paragraph', text: t.goldenBear.content.lessonsLearnedP1 },
  ]
});