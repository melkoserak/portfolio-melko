// Em: components/sections/ProjectCard/ProjectCard.tsx

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProjectCardProps } from '../../../lib/types';
import styles from './ProjectCard.module.css';

// Adicionamos 'id' às props que o componente recebe diretamente
const ProjectCard = memo(({ 
  id, 
  title, 
  description, 
  image, 
  href, // Ainda recebemos o href, mas vamos usar o "id" para o link
  style, 
  priority = false 
}: ProjectCardProps) => {
  return (
    <motion.article 
      className={`${styles.card} ${styles[`style${style}`]}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={`Capa do projeto ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          priority={priority}
        />
      </div>
      
      {/* CORREÇÃO PRINCIPAL ESTÁ AQUI */}
      <Link 
        href={{
          pathname: '/projetos/[slug]', // Aponta para o nosso template de página
          query: { slug: id },          // Usa o ID do projeto como o "slug"
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