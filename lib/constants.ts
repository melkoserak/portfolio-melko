// Em: lib/constants.ts

export const NAVIGATION_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/sobre-mim', label: 'Sobre mim' },
  { href: '/contato', label: 'Contato' }
] as const;

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