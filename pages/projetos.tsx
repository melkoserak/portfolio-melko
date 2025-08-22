// Em: pages/projetos.tsx

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import Layout from '../components/common/Layout';
import { Project } from '../lib/types';
import ProjectGrid from '../components/sections/ProjectGrid';
import { getUxUiProjects } from '../data/projects';
import { getTranslations } from '../lib/translations';

interface ProjetosPageProps {
  allProjects: Project[];
  t: { [key: string]: any };
}

export default function ProjetosPage({ allProjects, t }: ProjetosPageProps) {
  const router = useRouter();

  return (
    <Layout title={t.navProjects} canonicalPath={router.asPath}>
      <div style={{ paddingTop: '4em', paddingBottom: '4em' }}>
        <ProjectGrid title={t.navProjects} projects={allProjects} priority={true} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ProjetosPageProps> = async ({ locale }) => {
  const t = await getTranslations(locale);
  const allProjects = getUxUiProjects(t);

  return {
    props: {
      allProjects,
      t,
    },
  };
};