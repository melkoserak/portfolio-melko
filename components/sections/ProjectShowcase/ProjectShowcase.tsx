// Em: components/sections/ProjectShowcase/ProjectShowcase.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../../lib/types';
import ProjectCard from '../ProjectCard'; // Vamos reutilizar o card que já temos
import styles from './ProjectShowcase.module.css';

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase = memo(({ projects }: ProjectShowcaseProps) => {
  return (
    <section className={styles.showcaseContainer}>
      {projects.map((project, index) => (
        <div key={project.id} className={styles.projectSlide}>
          <motion.div
            className={styles.cardWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ProjectCard
              {...project}
              priority={index < 2} // Otimiza o carregamento das primeiras imagens
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
});

ProjectShowcase.displayName = 'ProjectShowcase';
export default ProjectShowcase;