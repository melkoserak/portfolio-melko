// Em: components/sections/ProjectGrid/ProjectGrid.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { Project } from '../../../lib/types';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  title: string;
  projects: Project[];
  priority?: boolean;
}

// 1. Definimos as "variantes" da animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 // A mágica acontece aqui: um atraso de 0.1s entre cada item filho
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ProjectGrid = memo(({ title, projects, priority = false }: ProjectGridProps) => {
  return (
    <section className={styles.section}>
      {title && <h1 className={styles.sectionTitle}>{title}</h1>}
      
      {/* 2. Aplicamos as variantes ao container do grid */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // A animação começa quando o elemento entra na tela
        viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez
      >
        {projects.map((project, index) => (
          // 3. E aplicamos a variante de "item" a cada card
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard 
              {...project} 
              priority={priority && index < 2}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

ProjectGrid.displayName = 'ProjectGrid';
export default ProjectGrid;