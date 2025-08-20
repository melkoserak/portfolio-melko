// Em: components/sections/HorizontalShowcase/HorizontalShowcase.tsx

import { memo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../../../lib/types';
import ProjectCard from '../ProjectCard';
import styles from './HorizontalShowcase.module.css';

interface HorizontalShowcaseProps {
  projects: Project[];
}

const HorizontalShowcase = memo(({ projects }: HorizontalShowcaseProps) => {
  const targetRef = useRef<HTMLDivElement>(null);

  // 1. useScroll: Monitora o progresso do scroll do container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // 2. useTransform: Mapeia o scroll vertical (0 a 1) para um movimento horizontal (x)
  // O valor "-78%" depende do número de cards e do gap. Ajuste se necessário.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={targetRef} className={styles.container}>
      <div className={styles.stickyWrapper}>
        {/* 3. O motion.div aplica o movimento horizontal no "trilho" */}
        <motion.div style={{ x }} className={styles.track}>
          {projects.map((project, index) => (
            <div key={project.id} className={styles.cardWrapper}>
              <ProjectCard
                {...project}
                priority={index < 2}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

HorizontalShowcase.displayName = 'HorizontalShowcase';
export default HorizontalShowcase;