// Em: lib/constants.ts

// Transformamos a constante em uma função que recebe as traduções
export const getNavigationItems = (t: { [key: string]: string }) => [
  { href: '/', label: t.navHome },
  { href: '/sobre-mim', label: t.navAbout },
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