// Em: data/projects/dividi.ts

import { Project } from '../../lib/types';

export const getDividiProject = (t: { [key: string]: any }): Project => ({
  id: 'dividi',
  title: 'Dividi',
  description: t.dividi.description, // MUDANÇA AQUI
  type: 'UX/UI',
  category: 'platform',
  image: '/images/dividi/capa-dividi.png',
  href: '/projetos/dividi',
  style: 1,
  content: [
      { type: 'image', src: '/images/dividi/capa.png', alt: t.dividi.capaAlt }, // E AQUI
      {
        type: 'intro-grid', items: [
          { title: t.dividi.clientTitle, text: t.dividi.clientText },
          { title: t.dividi.objectiveTitle, text: t.dividi.objectiveText },
          { title: t.dividi.solutionTitle, text: t.dividi.solutionText },
          { title: t.dividi.roleTitle, text: t.dividi.roleText }
        ]
      },
    // E em todos os 't.dividiContent' para 't.dividi.content'
    { type: 'heading', level: 2, text: t.dividi.content.challengeTitle },
    { type: 'paragraph', text: t.dividi.content.challengeP1 },
    { type: 'image', src: '/images/dividi/desafio-outros-sites.png', alt: 'Comparativo de outros sites para dividir moradia' },
    { type: 'heading', level: 2, text: t.dividi.content.financialPainTitle },
    { type: 'paragraph', text: t.dividi.content.financialPainP1 },
    { type: 'image', src: '/images/dividi/grafico-inflacao.png', alt: 'Gráfico mostrando a inflação do aluguel' },
    { type: 'heading', level: 2, text: t.dividi.content.cultureResearchTitle },
    { type: 'paragraph', text: t.dividi.content.cultureResearchP1 },
    { type: 'paragraph', text: t.dividi.content.cultureResearchP2 },
    { type: 'paragraph', text: t.dividi.content.cultureResearchP3 },
    { type: 'splide', id: 'image-carousel', images: [
        { src: '/images/dividi/pergunta-01.png', alt: 'Gráfico de Gênero' },
        { src: '/images/dividi/pergunta-02.png', alt: 'Gráfico de Idade' },
        { src: '/images/dividi/pergunta-03.png', alt: 'Gráfico sobre já ter dividido moradia' }
    ]},
    { type: 'paragraph', text: t.dividi.content.neverSharedTitle },
    { type: 'splide', id: 'image-carousel-2', images: [
        { src: '/images/dividi/pergunta-nunca-dividiu-01.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-02.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-03.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-04.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-05.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-06.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-07.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-08.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-09.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-10.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-nunca-dividiu-11.png', alt: 'Pesquisa' }
    ]},
    { type: 'paragraph', text: t.dividi.content.alreadySharedTitle },
    { type: 'splide', id: 'image-carousel-3', images: [
        { src: '/images/dividi/pergunta-dividiu-01.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-02.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-03.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-04.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-05.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-06.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-07.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-08.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-09.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-10.png', alt: 'Pesquisa' },
        { src: '/images/dividi/pergunta-dividiu-11.png', alt: 'Pesquisa' }
    ]},
    { type: 'paragraph', text: t.dividi.content.researchConclusionP1 },
    {
        type: 'feature-list', items: [
            { title: t.dividi.featureLocationTitle, text: t.dividi.featureLocationText },
            { title: t.dividi.featureSizeTitle, text: t.dividi.featureSizeText },
            { title: t.dividi.featurePriceTitle, text: t.dividi.featurePriceText },
            { title: t.dividi.featureLifestyleTitle, text: t.dividi.featureLifestyleText },
            { title: t.dividi.featureSecurityTitle, text: t.dividi.featureSecurityText }
        ]
      },
    { type: 'heading', level: 2, text: t.dividi.content.opportunityTitle },
    { type: 'paragraph', text: t.dividi.content.opportunityP1 },
    { type: 'image', src: '/images/dividi/logo-dividi.png', alt: 'Logo da Dividi' },
    { type: 'video', src: '/images/dividi/video-brand-dividi.mp4' },
    { type: 'image', src: '/images/dividi/brand-01.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand--02.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand-04.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand-07.png', alt: 'Branding Dividi' },
    { type: 'heading', level: 2, text: t.dividi.content.sloganTitle },
    { type: 'paragraph', text: t.dividi.content.sloganP1 },
    { type: 'video', src: '/images/dividi/dividi-dois.mp4' },
    { type: 'heading', level: 2, text: t.dividi.content.businessModelTitle },
    { type: 'paragraph', text: t.dividi.content.businessModelP1 },
    { type: 'image', src: '/images/dividi/desing-business.png', alt: 'Business Design Canvas da Dividi' },
    { type: 'heading', level: 2, text: t.dividi.content.userFlowTitle },
    { type: 'image', src: '/images/dividi/flow-chart.png', alt: 'Diagrama de fluxo do usuário' },
    { type: 'heading', level: 2, text: t.dividi.content.sitemapTitle },
    { type: 'image', src: '/images/dividi/sitemap.png', alt: 'Sitemap do projeto Dividi' },
    { type: 'heading', level: 2, text: t.dividi.content.wireframingTitle },
    { type: 'paragraph', text: t.dividi.content.wireframingP1 },
    { type: 'image', src: '/images/dividi/wireframe.png', alt: 'Wireframes do Dividi' },
    { type: 'heading', level: 2, text: t.dividi.content.prototypeTitle },
    { type: 'paragraph', text: t.dividi.content.prototypeHomepage },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D453-1245%26t%3DnUN28BRJkQVX4Ios-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: t.dividi.content.prototypeSearch },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D482-9987%26t%3DnUN28BRJkQVX4Ios-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: t.dividi.content.prototypeCompanionSearch },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D491-13828%26t%3DKN6BXVTXU29QPDbG-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: t.dividi.content.prototypeProfile },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D525-4078%26t%3DbG9LXhulaf0xHFJo-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: t.dividi.content.prototypeDashboard },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D525-4628%26t%3DcBBXC95BoV2xKUvu-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'heading', level: 2, text: 'Components' },
    { type: 'image', src: '/images/dividi/components.png', alt: 'Componentes do design system' },
  ]
});