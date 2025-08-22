// Em: data/projects.ts

import { Project } from '../lib/types';

export const getUxUiProjects = (t: { [key: string]: string }): Project[] => ([
{
  id: 'dividi',
  title: 'Dividi',
  description: t.dividiDescription,
  type: 'UX/UI',
  category: 'platform',
  image: '/images/dividi/capa-dividi.png',
  href: '/projetos/dividi',
  style: 1,
  content: [
      { type: 'image', src: '/images/dividi/capa.png', alt: t.dividiCapaAlt },
      {
        type: 'intro-grid', items: [
          { title: t.dividiClientTitle, text: t.dividiClientText },
          { title: t.dividiObjectiveTitle, text: t.dividiObjectiveText },
          { title: t.dividiSolutionTitle, text: t.dividiSolutionText },
          { title: t.dividiRoleTitle, text: t.dividiRoleText }
        ]
      },
    { type: 'heading', level: 2, text: 'Desafio: Encontrar um Lar para Compartilhar' },
    { type: 'paragraph', text: 'Há cerca de dois anos, eu estava em busca de uma casa ou apartamento para dividir, e a experiência foi terrível. Tive que recorrer a grupos do Facebook e encontrei alguns sites que ofereciam esse tipo de serviço, porém, eles não eram amplamente divulgados e tinham poucos usuários. Além disso, a usabilidade não era agradável, tornando a experiência cansativa e entediante.' },
    { type: 'image', src: '/images/dividi/desafio-outros-sites.png', alt: 'Comparativo de outros sites para dividir moradia' },
    { type: 'heading', level: 2, text: 'Dores financeiras' },
    { type: 'paragraph', text: 'Durante a pandemia, enfrentamos uma série de desafios econômicos, especialmente relacionados à inflação, que afetou significativamente meu orçamento. Notei um aumento considerável nos custos de aluguel, o que agravou ainda mais a situação financeira. Minha experiência na Austrália, onde a cultura de compartilhar moradia era comum tanto entre estudantes quanto entre profissionais estabelecidos, me fez refletir sobre a viabilidade dessa prática em nosso contexto.' },
    { type: 'image', src: '/images/dividi/grafico-inflacao.png', alt: 'Gráfico mostrando a inflação do aluguel' },
    { type: 'heading', level: 2, text: 'Pesquisa na Cultura' },
    { type: 'paragraph', text: 'Nós brasileiros nunca tivemos uma cultura forte de dividir apartamentos. Ficamos em casa por mais tempo do que o usual devido a questões econômicas; o poder de compra sempre foi um obstáculo. Alugar uma casa, fornecer um cheque caução e mobiliar um apartamento sempre representaram desafios para nós brasileiros. Geralmente, dividimos com pessoas conhecidas, mas e para aqueles que não têm amigos para dividir?' },
    { type: 'paragraph', text: 'Decidi conduzir uma pesquisa de mercado para compreender melhor esse público e seus comportamentos. Dividi-o em dois grupos: aqueles que já dividiram e aqueles que nunca dividiram.' },
    { type: 'paragraph', text: 'As três primeiras perguntas eram genéricas e foram feitas a ambos os públicos.' },
    { type: 'splide', id: 'image-carousel', images: [
        { src: '/images/dividi/pergunta-01.png', alt: 'Gráfico de Gênero' },
        { src: '/images/dividi/pergunta-02.png', alt: 'Gráfico de Idade' },
        { src: '/images/dividi/pergunta-03.png', alt: 'Gráfico sobre já ter dividido moradia' }
    ]},
    { type: 'paragraph', text: 'Pessoas que nunca dividiram:' },
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
    { type: 'paragraph', text: 'Pessoas que já dividiram:' },
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
   { type: 'paragraph', text: 'Considerando os resultados da pesquisa, embora tenhamos observado algumas diferenças nas respostas entre os dois grupos, podemos identificar aspectos essenciais que influenciam na escolha de uma plataforma de compartilhamento de moradia.'},
    // NOVO BLOCO: FEATURE-LIST
    {
        type: 'feature-list', items: [
            { title: t.dividiFeatureLocationTitle, text: t.dividiFeatureLocationText },
            { title: t.dividiFeatureSizeTitle, text: t.dividiFeatureSizeText },
            { title: t.dividiFeaturePriceTitle, text: t.dividiFeaturePriceText },
            { title: t.dividiFeatureLifestyleTitle, text: t.dividiFeatureLifestyleText },
            { title: t.dividiFeatureSecurityTitle, text: t.dividiFeatureSecurityText }
        ]
      },
   { type: 'heading', level: 2, text: 'Oportunidade de Dividi' },
    { type: 'paragraph', text: 'Com base nessa experiência, surgiu a ideia de criar um serviço onde as pessoas pudessem encontrar seu companheiro de casa ideal, alguém que se adequasse perfeitamente ao seu perfil e tivesse uma fácil adaptação ao convívio, compartilhando os mesmos costumes e perfil. Com essa visão em mente, decidi dar vida à "Dividi".' },
    { type: 'image', src: '/images/dividi/logo-dividi.png', alt: 'Logo da Dividi' },
    { type: 'video', src: '/images/dividi/video-brand-dividi.mp4' },
    { type: 'image', src: '/images/dividi/brand-01.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand--02.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand-04.png', alt: 'Branding Dividi' },
    { type: 'image', src: '/images/dividi/brand-07.png', alt: 'Branding Dividi' },
    { type: 'heading', level: 2, text: 'Quando a gente dividi, fica mais fácil pra todo mundo.' },
    { type: 'paragraph', text: 'Na fase inicial, estabeleci a essência da Dividi e sua mensagem fundamental: oferecer novas experiências, amizades, diversão, independência, desafios e aprendizados. Agora, surge a questão de como visualmente transmitir esses valores de forma impactante.'},
    { type: 'video', src: '/images/dividi/dividi-dois.mp4' },
    { type: 'heading', level: 2, text: 'Compreendendo o Modelo de Negócios do Dividi' },
    { type: 'paragraph', text: 'A utilização do Business Design Canvas oferece uma estrutura visual e abrangente que nos permite analisar e desenvolver todas as áreas do nosso negócio, desde a proposta de valor até a estrutura de custos. Com o Business Design Canvas, podemos identificar e explorar minuciosamente cada elemento do nosso modelo de negócios, garantindo que não deixemos passar nenhum detalhe importante.'},
    { type: 'image', src: '/images/dividi/desing-business.png', alt: 'Business Design Canvas da Dividi' },
    { type: 'heading', level: 2, text: 'Diagrama do fluxo do usuário' },
    { type: 'image', src: '/images/dividi/flow-chart.png', alt: 'Diagrama de fluxo do usuário' },
    { type: 'heading', level: 2, text: 'Sitemap' },
    { type: 'image', src: '/images/dividi/sitemap.png', alt: 'Sitemap do projeto Dividi' },
    { type: 'heading', level: 2, text: 'Esboçando o layout' },
    { type: 'paragraph', text: 'Como a estrutura funcionará e suas funcionalidades por meio de desenhos simplificados.'},
    { type: 'image', src: '/images/dividi/wireframe.png', alt: 'Wireframes do Dividi' },
    { type: 'heading', level: 2, text: 'Protótipo' },
    { type: 'paragraph', text: 'Homepage: A intenção foi simplificar e ser direto no layout, mostrando qual é o tipo de serviço que oferecemos.' },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D453-1245%26t%3DnUN28BRJkQVX4Ios-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: 'Busca: Para quem está procurando moradia para dividir. A intenção do layout foi reunir tudo em uma única tela, oferecendo ao usuário a oportunidade de navegar por todas as funcionalidades na mesma página.' },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D482-9987%26t%3DnUN28BRJkQVX4Ios-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: 'Busca: Para quem está procurando um companheiro para compartilhar sua moradia.' },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D491-13828%26t%3DKN6BXVTXU29QPDbG-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: 'Perfil:' },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D525-4078%26t%3DbG9LXhulaf0xHFJo-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'paragraph', text: 'Dashboard:' },
    { type: 'iframe', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGZESNDTr13OFEGgpOveQOq%2FDivdi%3Ftype%3Ddesign%26node-id%3D525-4628%26t%3DcBBXC95BoV2xKUvu-1%26scaling%3Dscale-down-width%26page-id%3D453%253A1242%26starting-point-node-id%3D453%253A1245%26mode%3Ddesign' },
    { type: 'heading', level: 2, text: 'Components' },
    { type: 'image', src: '/images/dividi/components.png', alt: 'Componentes do design system' },
]
  },
  { 
    id: 'tryb', 
    title: 'Tryb', 
    description: 'Onboarding - UX / UI',
    type: 'UX/UI', 
    category: 'onboarding', 
    image: '/images/tryb/capa-tryb-home.png', 
    href: '/projetos/tryb', 
    style: 2 
  },
  { 
    id: 'sonic-app', 
    title: 'Sonic', 
    description: 'APP - UX / UI',
    type: 'UX/UI', 
    category: 'app', 
    image: '/images/sonic-app/capa-home-sonic.png', 
    href: '/projetos/sonic-app', 
    style: 3 
  },
  {
    id: 'golden-bear',
    title: 'Golden Bear Seguros',
    description: 'Website - UX / UI',
    type: 'UX/UI',
    category: 'website',
    image: '/images/golden-bear/capa-golden.png',
    href: '/projetos/golden-bear',
    style: 4,
  }
]);