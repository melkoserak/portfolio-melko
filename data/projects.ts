// Em: data/projects.ts

import { Project } from '../lib/types';

export const uxuiProjects: Project[] = [
{
  id: 'dividi',
  title: 'Dividi',
  description: 'Plataforma - UX / UI',
  type: 'UX/UI',
  category: 'platform',
  image: '/images/dividi/capa-dividi.png',
  href: '/projetos/dividi',
  style: 1,
  content: [
    { type: 'image', src: '/images/dividi/capa.png', alt: 'Capa do projeto Dividi' },
    { type: 'heading', level: 2, text: 'Desafio: Encontrar um Lar para Compartilhar' },
    { type: 'paragraph', text: 'Há cerca de dois anos, eu estava em busca de uma casa ou apartamento para dividir, e a experiência foi terrível. Tive que recorrer a grupos do Facebook e encontrei alguns sites que ofereciam esse tipo de serviço, porém, eles não eram amplamente divulgados e tinham poucos usuários. Além disso, a usabilidade não era agradável, tornando a experiência cansativa e entediante.' },
    { type: 'image', src: '/images/dividi/desafio-outros-sites.png', alt: 'Comparativo de outros sites para dividir moradia' },
    { type: 'heading', level: 2, text: 'Dores financeiras' },
    { type: 'paragraph', text: 'Durante a pandemia, enfrentamos uma série de desafios econômicos, especialmente relacionados à inflação, que afetou significativamente meu orçamento. Notei um aumento considerável nos custos de aluguel, o que agravou ainda mais a situação financeira. Minha experiência na Austrália, onde a cultura de compartilhar moradia era comum tanto entre estudantes quanto entre profissionais estabelecidos, me fez refletir sobre a viabilidade dessa prática em nosso contexto.' },
    { type: 'image', src: '/images/dividi/grafico-inflacao.png', alt: 'Gráfico mostrando a inflação do aluguel' },
    { type: 'heading', level: 2, text: 'Pesquisa na Cultura' },
    { type: 'paragraph', text: 'Nós brasileiros nunca tivemos uma cultura forte de dividir apartamentos. Ficamos em casa por mais tempo do que o usual devido a questões econômicas; o poder de compra sempre foi um obstáculo. Alugar uma casa, fornecer um cheque caução e mobiliar um apartamento sempre representaram desafios para nós brasileiros. Geralmente, dividimos com pessoas conhecidas, mas e para aqueles que não têm amigos para dividir?' },
    { type: 'paragraph', text: 'Decidi conduzir uma pesquisa de mercado para compreender melhor esse público e seus comportamentos.' },
    { type: 'heading', level: 2, text: 'Oportunidade de Dividi' },
    { type: 'paragraph', text: 'Com base nessa experiência, surgiu a ideia de criar um serviço onde as pessoas pudessem encontrar seu companheiro de casa ideal, alguém que se adequasse perfeitamente ao seu perfil e tivesse uma fácil adaptação ao convívio, compartilhando os mesmos costumes e perfil. Com essa visão em mente, decidi dar vida à "Dividi".' },
    { type: 'image', src: '/images/dividi/logo-dividi.png', alt: 'Logo da Dividi' }
  ]
},
 { id: 'tryb', title: 'Tryb', description: 'Onboarding - UX / UI', type: 'UX/UI', category: 'onboarding', image: '/images/tryb/capa-tryb-home.png', href: '/projetos/tryb', style: 2 },
  { id: 'sonic-app', title: 'Sonic', description: 'APP - UX / UI', type: 'UX/UI', category: 'app', image: '/images/sonic-app/capa-home-sonic.png', href: '/projetos/sonic-app', style: 3 },
{
  id: 'golden-bear',
  title: 'Golden Bear Seguros',
  description: 'Website - UX / UI',
  type: 'UX/UI',
  category: 'website',
  image: '/images/golden-bear/capa-golden.png',
  href: '/projetos/golden-bear',
  style: 4,
  content: [
    { type: 'image', src: '/images/golden-bear/header-bear.png', alt: 'Golden Bear Seguros' },
    { type: 'heading', level: 2, text: 'Entendendo o negócio' },
    { type: 'paragraph', text: 'O Grupo Golden Bear Seguros é uma empresa com um legado familiar de 40 anos no setor de seguros. Ao longo de sua trajetória, a empresa sempre priorizou a consultoria em seguros de todos os ramos, atendendo às necessidades de seus clientes de forma personalizada e eficiente.' },
    { type: 'paragraph', text: 'A Golden Bear está passando por um processo de reestruturação para se tornar uma empresa cada vez mais voltada ao ambiente digital. Esse movimento estratégico visa acompanhar as mudanças tecnológicas e comportamentais do mercado, com o objetivo de aumentar sua competitividade e expandir sua presença digital.' },
    { type: 'heading', level: 2, text: 'Definindo o processo de design' },
    { type: 'image', src: '/images/golden-bear/processo de design.png', alt: 'Diagrama do processo de design: Entender, Idear, Prototipar, Implementar.' },
    { type: 'heading', level: 2, text: 'Entendendo o problema' },
    { type: 'paragraph', text: 'A Necessidade de se adequar ao comportamento dos consumidores, que estão cada vez mais presentes no ambiente digital. Com o aumento da concorrência, é preciso destacar-se de forma clara e consistente, tornando-se relevante e atraente para seu público-alvo.' },
    { type: 'heading', level: 2, text: 'Personas' },
    { type: 'image', src: '/images/golden-bear/personas.png', alt: 'Exemplos de personas para o projeto' },
    { type: 'heading', level: 2, text: 'Wireframe' },
    { type: 'image', src: '/images/golden-bear/wireframe.png', alt: 'Wireframe do site da Golden Bear' },
    { type: 'heading', level: 2, text: 'Lições aprendidas' },
    { type: 'paragraph', text: 'Criar um website não se resume apenas a criar uma interface visual atraente. É crucial definir objetivos claros e compreender profundamente os usuários para apresentar de forma clara e direta o que eles estão procurando. As métricas e o monitoramento de usuários são ferramentas essenciais para avaliar o desempenho do website e identificar oportunidades de melhoria.' }
  ]
}];