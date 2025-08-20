// Em: components/sections/ProjectCard/ProjectCard.tsx

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../../../lib/types';
import styles from './ProjectCard.module.css';

const ProjectCard = memo(({ 
  id, 
  title, 
  description, 
  image, 
  href,
  style, 
  priority = false 
}: ProjectCardProps) => {
  return (
    <motion.article 
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`Capa do projeto ${title}`}
          fill
          // CORREÇÃO DE QUALIDADE 1: Ajusta o `sizes` para o novo tamanho
          sizes="(max-width: 768px) 100vw, 70vw"
          // CORREÇÃO DE QUALIDADE 2: Pede uma imagem com 90% de qualidade
          quality={90}
          className={styles.image}
          priority={priority}
        />
      </div>
      
      <Link 
        href={{
          pathname: '/projetos/[slug]',
          query: { slug: id },
        }}
        className={styles.link} 
        aria-label={`Ver projeto ${title}`}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;