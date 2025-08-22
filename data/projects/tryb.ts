// Em: data/projects/tryb.ts

import { Project } from '../../lib/types';

export const getTrybProject = (t: { [key: string]: any }): Project => ({
  id: 'tryb',
  title: 'Tryb',
  description: t.tryb.description,
  type: 'UX/UI',
  category: 'onboarding',
  image: '/images/tryb/capa-tryb-home.png',
  href: '/projetos/tryb',
  style: 2,
  content: [
    { type: 'image', src: '/images/tryb/tryb-banner-hero.png', alt: t.tryb.capaAlt },
    {
      type: 'intro-grid', items: [
        { title: t.tryb.clientTitle, text: t.tryb.clientText },
        { title: t.tryb.objectiveTitle, text: t.tryb.objectiveText },
        { title: t.tryb.solutionTitle, text: t.tryb.solutionText },
        { title: t.tryb.roleTitle, text: t.tryb.roleText }
      ]
    },
    { type: 'heading', level: 2, text: t.tryb.content.aboutClientTitle },
    { type: 'paragraph', text: t.tryb.content.aboutClientP1 },
    { type: 'image', src: '/images/tryb/tryb-presentation.png', alt: 'Apresentação do Tryb' },
    
    { type: 'heading', level: 2, text: t.tryb.content.problemTitle },
    { type: 'paragraph', text: t.tryb.content.problemP1 },

    { type: 'heading', level: 2, text: t.tryb.content.step1Title },
    { type: 'paragraph', text: t.tryb.content.step1P1 },
    { type: 'paragraph', text: t.tryb.content.step1P2 },
    { type: 'image', src: '/images/tryb/flow-signup.png', alt: 'Fluxo de Cadastro do Tryb' },

    { type: 'heading', level: 2, text: t.tryb.content.step2Title },
    { type: 'paragraph', text: t.tryb.content.step2P1 },
    { type: 'image', src: '/images/tryb/screen-definition.png', alt: 'Definição de Telas do Onboarding' },

    { type: 'heading', level: 2, text: t.tryb.content.step3Title },
    { type: 'paragraph', text: t.tryb.content.step3P1 },
    { type: 'image', src: '/images/tryb/wireframe-tryb.png', alt: 'Wireframes do Tryb' },
    
    { type: 'heading', level: 2, text: t.tryb.content.finalStepTitle },
    { type: 'splide', id: 'splide-tryb', images: [
        { src: '/images/tryb/signup.png', alt: 'Tela de Cadastro' },
        { src: '/images/tryb/profile.png', alt: 'Tela de Perfil' },
        { src: '/images/tryb/describes.png', alt: 'Tela de Categorias' },
        { src: '/images/tryb/pcik-template.png', alt: 'Tela de Escolha de Template' },
        { src: '/images/tryb/pricing.png', alt: 'Tela de Preços' },
        { src: '/images/tryb/dashboard.png', alt: 'Dashboard' }
    ]},
    { type: 'paragraph', text: `${t.tryb.content.finalStepP1}<a href="https://tryb.cc/" target="_blank" rel="noopener noreferrer">https://tryb.cc/</a>` },
    
    { type: 'heading', level: 2, text: t.tryb.content.resultsTitle },
    { type: 'paragraph', text: t.tryb.content.resultsP1 },
    { type: 'paragraph', text: t.tryb.content.resultsP2 },
  ]
});