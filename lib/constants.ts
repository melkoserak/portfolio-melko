// Em: lib/constants.ts

// AQUI ESTÁ A CORREÇÃO PRINCIPAL
// Mudamos o tipo de 't' para aceitar qualquer estrutura e adicionamos o novo link.
export const getNavigationItems = (t: { [key: string]: any }) => [
  { href: '/', label: t.navHome },
  { href: '/projetos', label: t.navProjects },
  { href: '/sobre-mim', label: t.navAbout },
  { href: '/experiencia', label: t.navExperience },
  { href: '/contato', label: t.navContact }
];

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/melkoserak/',
    icon: 'linkedin',
    label: 'LinkedIn'
  },
  {
    href: 'https://www.behance.net/melkoserak',
    icon: 'behance',
    label: 'Behance'
  }
] as const;

export const CONTACT_EMAIL = 'melko.serak@gmail.com';