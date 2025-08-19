// Novo tipo para blocos de conteúdo
export type ContentBlock = 
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string };

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'UX/UI' | 'Brand Design';
  category: 'platform' | 'onboarding' | 'app' | 'website' | 'identity';
  image: string; // Imagem da capa
  href: string;
  style: 1 | 2 | 3 | 4 | 5 | 6;
  // Novo campo para o conteúdo da página do projeto
  content?: ContentBlock[]; 
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ProjectCardProps extends Project {
  priority?: boolean;
}

export interface ProjectGridProps {
  title: string;
  projects: Project[];
  priority?: boolean;
}