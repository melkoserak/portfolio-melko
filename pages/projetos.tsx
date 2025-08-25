// Em: pages/projetos.tsx

import Layout from '../components/common/Layout';
import { Project } from '../lib/types';
import ProjectGrid from '../components/sections/ProjectGrid';
import { getUxUiProjects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function ProjetosPage() {
  const { t, locale } = useLanguage(); // 1. Pegue o 'locale' do hook
  const allProjects = getUxUiProjects(t);

  return (
    <Layout title={t.navProjects}>
      <div style={{ paddingTop: '4em', paddingBottom: '4em' }}>
        {/* 2. Adicione a key aqui */}
        <ProjectGrid key={locale} title={t.navProjects} projects={allProjects} priority={true} />
      </div>
    </Layout>
  );
}