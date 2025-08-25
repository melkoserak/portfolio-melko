// Em: pages/index.tsx

import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import CtaSection from '../components/sections/CtaSection/CtaSection';
import HorizontalShowcase from '../components/sections/HorizontalShowcase';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useLanguage } from '../context/LanguageContext'; // Importe o hook de idioma
import ProjectGrid from '../components/sections/ProjectGrid';
import { getUxUiProjects } from '../data/projects';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t } = useLanguage(); // Use o hook para pegar os textos

  // Os projetos agora são gerados com base nos textos do contexto
  const allProjects = getUxUiProjects(t);

  return (
    <Layout>
      <div className="page-container">
        <Hero t={t} />
      </div>

      {isMobile ? (
        <div className="page-container">
          <ProjectGrid title={t.navProjects} projects={allProjects} priority={true} />
        </div>
      ) : (
        <HorizontalShowcase projects={allProjects} />
      )}

      <CtaSection t={t} />
    </Layout>
  );
}

// Não precisamos mais de getStaticProps aqui! Pode remover.