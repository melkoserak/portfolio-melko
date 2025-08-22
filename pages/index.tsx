// Em: pages/index.tsx

import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import HorizontalShowcase from '../components/sections/HorizontalShowcase';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Project } from '../lib/types';
import { promises as fs } from 'fs';
import path from 'path';
import ProjectGrid from '../components/sections/ProjectGrid';
import { getUxUiProjects } from '../data/projects'; // Importe a função

interface HomeProps {
  allProjects: Project[];
  t: { [key: string]: string };
}

export default function Home({ allProjects, t }: HomeProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Layout>
      <div className="page-container">
        <Hero t={t} />
      </div>

      {isMobile ? (
        <div className="page-container">
          <ProjectGrid title="Projetos" projects={allProjects} priority={true} />
        </div>
      ) : (
        <HorizontalShowcase projects={allProjects} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const jsonPath = path.join(process.cwd(), 'locales', `${locale || 'pt'}.json`);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const t = JSON.parse(fileContent);

  // Chame a função com as traduções
  const allProjects = getUxUiProjects(t);

  return {
    props: {
      allProjects,
      t,
    },
  };
};