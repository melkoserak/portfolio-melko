// Em: pages/index.tsx

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import CtaSection from '../components/sections/CtaSection/CtaSection'; // ADICIONE ESTE IMPORT
import HorizontalShowcase from '../components/sections/HorizontalShowcase';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Project } from '../lib/types';
import ProjectGrid from '../components/sections/ProjectGrid';
import { getUxUiProjects } from '../data/projects';
import { getTranslations } from '../lib/translations'; // ADICIONE ESTE IMPORT

interface HomeProps {
  allProjects: Project[];
  t: { [key: string]: any };
}

export default function Home({ allProjects, t }: HomeProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();

  return (
    <Layout canonicalPath={router.asPath}>
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

      {/* ADICIONE A NOVA SEÇÃO AQUI */}
      <CtaSection t={t} />
      
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  // AQUI ESTÁ A CORREÇÃO
  // Agora usamos a nova função para carregar todas as traduções
  const t = await getTranslations(locale);

  const allProjects = getUxUiProjects(t);

  return {
    props: {
      allProjects,
      t,
    },
  };
};