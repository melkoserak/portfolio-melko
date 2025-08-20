// Em: pages/index.tsx

import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import HorizontalShowcase from '../components/sections/HorizontalShowcase';
import { useMediaQuery } from '../hooks/useMediaQuery'; // 1. Importar o hook
import { uxuiProjects } from '../data/projects';
import { Project } from '../lib/types';
import { promises as fs } from 'fs';
import path from 'path';
import ProjectGrid from '../components/sections/ProjectGrid';

interface HomeProps {
  allProjects: Project[];
  t: { [key: string]: string };
}

export default function Home({ allProjects, t }: HomeProps) {
  // 2. Usar o hook. Retorna 'true' se a tela for menor que 768px.
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout t={t}> {/* Passe a prop t aqui */}
      <div className="page-container">
        <Hero t={t} />
      </div>

      {/* 3. Renderização condicional */}
      {isMobile ? (
        // Se for mobile, mostra a grelha de projetos vertical
        <div className="page-container">
          <ProjectGrid title="Projetos" projects={allProjects} priority={true} />
        </div>
      ) : (
        // Se for desktop, mostra o scroll horizontal
        <HorizontalShowcase projects={allProjects} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const jsonPath = path.join(process.cwd(), 'locales', `${locale || 'pt'}.json`);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const t = JSON.parse(fileContent);

  // Juntamos os dois arrays de projetos em um só
  const allProjects = [...uxuiProjects];

  return {
    props: {
      allProjects, // Passando a lista para a página
      t,
    },
  };
};