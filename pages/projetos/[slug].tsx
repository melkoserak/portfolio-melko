// Em: pages/projetos/[slug].tsx

import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/common/Layout';
import { Project, ContentBlock, ProjectPageProps } from '../../lib/types';
import { getUxUiProjects } from '../../data/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/ProjectPage.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { promises as fs } from 'fs';
import path from 'path';
import ProjectCard from '../../components/sections/ProjectCard';
import { getTranslations } from '../../lib/translations';
import ScrollToTopButton from '../../components/common/ScrollToTopButton'; // ADICIONE ESTE IMPORT

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

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
          // Modificação para renderizar HTML no parágrafo do link do Figma
          if (block.text.includes('<a href')) {
            return <motion.div key={index} className={`${styles.paragraph} ${styles.textBlock}`} {...motionProps} dangerouslySetInnerHTML={{ __html: block.text }} />;
          }
          return <motion.p key={index} className={`${styles.paragraph} ${styles.textBlock}`} {...motionProps}>{block.text}</motion.p>;
        case 'image':
          const imageClass = isFirstImage ? styles.firstImage : styles.otherImage;
          return (
            <motion.div key={index} className={`${styles.fullBleed} ${imageClass}`} {...motionProps}>
              <Image
                src={block.src}
                alt={block.alt}
                width={isFirstImage ? 1920 : 1440}
                height={isFirstImage ? 1080 : 810}
                className={styles.image}
                priority={isFirstImage}
              />
            </motion.div>
          );
        case 'iframe':
          return (
            <motion.div key={index} className={styles.fullBleed} {...motionProps}>
              <iframe
                className={styles.iframe}
                src={block.src}
                allowFullScreen
              ></iframe>
            </motion.div>
          );
           case 'video':
          return (
            <motion.div key={index} className={`${styles.fullBleed}`} {...motionProps}>
              <video className={styles.video} autoPlay muted loop playsInline>
                <source src={block.src} type="video/mp4" />
              </video>
            </motion.div>
          );
        case 'intro-grid':
          return (
            <motion.div key={index} className={`${styles.introGrid} ${styles.textBlock}`} {...motionProps}>
              {block.items.map((item, i) => (
                <div key={i} className={styles.introGridItem}>
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              ))}
            </motion.div>
          );
        case 'feature-list':
          return (
            <motion.div key={index} className={`${styles.featureList} ${styles.textBlock}`} {...motionProps}>
              {block.items.map((item, i) => (
                <div key={i} className={styles.featureListItem}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </motion.div>
          );
        case 'splide':
          return (
            <motion.div key={index} className={`${styles.splideContainer}`} {...motionProps}>
              <Splide options={{ rewind: true, gap: '1rem', perPage: 1 }} aria-label="Project Images">
                {block.images.map((image, i) => (
                  <SplideSlide key={i}>
                    <img src={image.src} alt={image.alt} className={styles.splideImage} />
                  </SplideSlide>
                ))}
              </Splide>
            </motion.div>
          );
        default:
          return null;
      }
};

export default function ProjectPage({ project, allProjects }: ProjectPageProps) {
  const router = useRouter();
  const otherProjects = allProjects.filter(p => p.id !== project.id);

  if (!project) return <p>Projeto não encontrado!</p>;

  const firstImageIndex = project.content?.findIndex(block => block.type === 'image');

  return (
    <Layout title={project.title} canonicalPath={router.asPath}>
      <div className={styles.container}>
        <motion.h1 className={`${styles.title} ${styles.textBlock}`} variants={blockVariants} initial="hidden" animate="visible">
          {project.title}
        </motion.h1>
        <motion.p className={`${styles.description} ${styles.textBlock}`} variants={blockVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
          {project.description}
        </motion.p>
        
        {project.content && project.content.map((block, index) => 
          renderContentBlock(block, index, index === firstImageIndex)
        )}
      </div>

      <div className="page-container">
        <section className={styles.otherProjectsSection}>
          <h2 className={styles.otherProjectsTitle}>Outros Projetos</h2>
          <div className={styles.otherProjectsGrid}>
            {otherProjects.map(otherProject => (
              <ProjectCard key={otherProject.id} {...otherProject} />
            ))}
          </div>
        </section>
      </div>
      
      {/* ADICIONE O BOTÃO AQUI */}
      <ScrollToTopButton />
    </Layout>
  );
}
 
export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dummyT = { 
    dividi: { description: '', content: {} },
    tryb: { description: '', content: {} },
    sonic: { description: '', content: {} },
    goldenBear: { description: '', content: {} }
  };

  const allProjects = getUxUiProjects(dummyT as any);
  const paths: any[] = [];

  allProjects.forEach(project => {
    if (project && project.id) {
      for (const locale of locales!) {
        paths.push({
          params: { slug: project.id },
          locale,
        });
      }
    }
  });

  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<ProjectPageProps, Params> = async (context) => {
  const { slug } = context.params!;
  const locale = context.locale;
  
  const t = await getTranslations(locale);

  const allProjects = getUxUiProjects(t);
  const project = allProjects.find(p => p.id === slug);
  
  if (!project) {
    return { notFound: true };
  }

  return { 
    props: { 
      project,
      allProjects
    } 
  };
};