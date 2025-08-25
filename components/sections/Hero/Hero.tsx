// Em: components/sections/Hero/Hero.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

interface HeroProps {
  t: { [key: string]: any }; // <-- CORREÇÃO APLICADA AQUI
}

const Hero = memo(({ t }: HeroProps) => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className={styles.title}>
        {t.heroTitle}
      </h1>
    </motion.section>
  );
});

Hero.displayName = 'Hero';
export default Hero;