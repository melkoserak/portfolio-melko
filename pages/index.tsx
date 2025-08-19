// Em: pages/index.tsx

import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import ProjectGrid from '../components/sections/ProjectGrid';
import { uxuiProjects, brandProjects } from '../data/projects';
import { Project } from '../lib/types';
import { promises as fs } from 'fs';
import path from 'path';

interface HomeProps {
  uxuiProjects: Project[];
  brandProjects: Project[];
  t: { [key: string]: string };
}

export default function Home({ uxuiProjects, brandProjects, t }: HomeProps) {
  return (
    // O Layout agora controla o container do conteúdo
    <Layout>
      <Hero t={t} />
      
      <ProjectGrid 
        title="Projetos UX/UI" // Adicionamos um título para a seção
        projects={uxuiProjects}
        priority={true}
      />

      <ProjectGrid 
        title="Projetos Brand Design"
        projects={brandProjects}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const jsonPath = path.join(process.cwd(), 'locales', `${locale}.json`);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const t = JSON.parse(fileContent);

  return {
    props: {
      uxuiProjects,
      brandProjects,
      t,
    },
  };
};