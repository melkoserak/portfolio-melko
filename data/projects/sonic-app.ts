// Em: data/projects/sonic-app.ts

import { Project } from '../../lib/types';

export const getSonicAppProject = (t: { [key: string]: any }): Project => ({
  id: 'sonic-app',
  title: 'Sonic',
  description: t.sonic.description,
  type: 'UX/UI',
  category: 'app',
  image: '/images/sonic-app/capa-home-sonic.png',
  href: '/projetos/sonic-app',
  style: 3,
  content: [
    { type: 'image', src: '/images/sonic-app/capa.png', alt: t.sonic.capaAlt },
    {
      type: 'intro-grid', items: [
        { title: t.sonic.clientTitle, text: t.sonic.clientText },
        { title: t.sonic.objectiveTitle, text: t.sonic.objectiveText },
        { title: t.sonic.solutionTitle, text: t.sonic.solutionText },
        { title: t.sonic.roleTitle, text: t.sonic.roleText }
      ]
    },
    { type: 'heading', level: 2, text: t.sonic.content.immersionTitle },
    { type: 'paragraph', text: t.sonic.content.immersionP1 },
    { type: 'image', src: '/images/sonic-app/fluxograma.png', alt: 'Fluxograma do processo de entrega' },

    { type: 'heading', level: 2, text: t.sonic.content.opportunityTitle },
    { type: 'paragraph', text: t.sonic.content.opportunityP1 },
    
    { type: 'heading', level: 2, text: t.sonic.content.understandingDriversTitle },
    { type: 'paragraph', text: t.sonic.content.understandingDriversP1 },
    { type: 'paragraph', text: t.sonic.content.understandingDriversP2 },
    { type: 'image', src: '/images/sonic-app/persona.png', alt: 'Persona do motorista' },

    { type: 'heading', level: 2, text: t.sonic.content.userJourneyTitle },
    { type: 'paragraph', text: t.sonic.content.userJourneyP1 },
    { type: 'image', src: '/images/sonic-app/jornada.png', alt: 'Jornada do usuário no app' },
    { type: 'paragraph', text: t.sonic.content.userJourneyP2 },
    { type: 'image', src: '/images/sonic-app/usuario.png', alt: 'Funcionalidades por tipo de usuário' },

    { type: 'heading', level: 2, text: t.sonic.content.adaptingToUserTitle },
    { type: 'paragraph', text: t.sonic.content.adaptingToUserP1 },
    { type: 'image', src: '/images/sonic-app/elementos.png', alt: 'Elementos de design para acessibilidade' },

    { type: 'heading', level: 2, text: t.sonic.content.wireframeTitle },
    { type: 'image', src: '/images/sonic-app/wireframe.png', alt: 'Wireframes do Sonic App' },

    { type: 'heading', level: 2, text: t.sonic.content.prototypeTitle },
    { type: 'paragraph', text: t.sonic.content.prototypeP1 },
    { type: 'video', src: '/images/sonic-app/prototipo.mp4' },
    { type: 'paragraph', text: `<a href="https://www.figma.com/proto/meXMcekBQdvqJKOwezCBdy/Sonic-APP?node-id=414%3A593&scaling=scale-down&page-id=317%3A216&starting-point-node-id=414%3A593" target="_blank" rel="noopener noreferrer">${t.sonic.content.prototypeLink}</a>` },

    { type: 'heading', level: 2, text: t.sonic.content.lessonsLearnedTitle },
    { type: 'paragraph', text: t.sonic.content.lessonsLearnedP1 },
  ]
});