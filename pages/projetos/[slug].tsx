// Em: pages/projetos/[slug].tsx

import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/common/Layout';
import { Project, ContentBlock } from '../../lib/types';
import { uxuiProjects } from '../../data/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/ProjectPage.module.css';

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

// A função de renderização agora recebe um parâmetro extra: isFirstImage
const renderContentBlock = (block: ContentBlock, index: number, isFirstImage: boolean) => {
  const motionProps = {
    variants: blockVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.2 }
  };

  switch (block.type) {
    case 'heading':
      return <motion.h2 key={index} className={`${styles.heading} ${styles.textBlock}`} {...motionProps}>{block.text}</motion.h2>;
    case 'paragraph':
      return <motion.p key={index} className={`${styles.paragraph} ${styles.textBlock}`} {...motionProps}>{block.text}</motion.p>;
    case 'image':
      // Define a classe da imagem condicionalmente
      const imageClass = isFirstImage ? styles.firstImage : styles.otherImage;
      return (
        <motion.div key={index} className={`${styles.fullBleed} ${imageClass}`} {...motionProps}>
          <Image 
            src={block.src} 
            alt={block.alt}
            width={isFirstImage ? 1920 : 1440} // Define a largura base para otimização
            height={isFirstImage ? 1080 : 810}
            className={styles.image}
            priority={isFirstImage} // A primeira imagem deve ser priorizada para o LCP
          />
        </motion.div>
      );
    default:
      return null;
  }
};

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  if (!project) return <p>Projeto não encontrado!</p>;

  // Encontra o índice da primeira imagem no array de conteúdo
  const firstImageIndex = project.content?.findIndex(block => block.type === 'image');

  return (
    <Layout title={project.title}>
      <div className={styles.container}>
        <motion.h1 className={`${styles.title} ${styles.textBlock}`} variants={blockVariants} initial="hidden" animate="visible">
          {project.title}
        </motion.h1>
        <motion.p className={`${styles.description} ${styles.textBlock}`} variants={blockVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          {project.description}
        </motion.p>
        
        {project.content && project.content.map((block, index) => 
          // Passa a informação se é a primeira imagem ou não
          renderContentBlock(block, index, index === firstImageIndex)
        )}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allProjects = [...uxuiProjects ];
  const paths: any[] = [];

  // Para cada projeto...
  allProjects.forEach(project => {
    // ...gere um caminho para cada idioma (locale)
    for (const locale of locales!) {
      paths.push({
        params: { slug: project.id },
        locale, // Especifica o idioma para este caminho
      });
    }
  });

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectPageProps, Params> = async (context) => {
  const { slug } = context.params!;
  const allProjects = [...uxuiProjects];
  
  // --- INÍCIO DO CÓDIGO DE DEBUG ---
  console.log(`--- [Página de Projeto] ---`);
  console.log(`Procurando pelo projeto com o slug: "${slug}"`);
  
  const project = allProjects.find(p => p.id === slug);
  
  if (!project) {
    console.error(`ERRO: Projeto com slug "${slug}" NÃO FOI ENCONTRADO na lista de dados.`);
    // Imprime todos os IDs disponíveis para ajudar a encontrar o erro
    console.log("IDs disponíveis:", allProjects.map(p => p.id));
    return { notFound: true };
  }

  console.log(`SUCESSO: Projeto "${project.title}" encontrado.`);
  // --- FIM DO DEBUG ---

  return { 
    props: { 
      project 
    } 
  };
};