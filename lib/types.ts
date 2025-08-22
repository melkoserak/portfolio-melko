export type ContentBlock =
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'iframe'; src: string }
  | { type: 'splide'; id: string; images: { src: string; alt: string }[] }
  | { type: 'video'; src: string }
  | { type: 'intro-grid'; items: { title: string; text: string }[] } // Para a introdução
  | { type: 'feature-list'; items: { title: string; text: string }[] }; // Para a lista de aspectos

export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'UX/UI' | 'Brand Design';
  category: 'platform' | 'onboarding' | 'app' | 'website' | 'identity';
  image: string;
  href: string;
  style: 1 | 2 | 3 | 4 | 5 | 6;
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

export interface ProjectPageProps {
  project: Project;
  allProjects: Project[]; // Adicione esta linha
}