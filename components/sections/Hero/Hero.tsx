import { memo } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = memo(({ t }: { t: { [key: string]: string } }) => {
  return (
    <motion.section /* ... */>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {t.heroTitle} {/* Usa a tradução em vez do texto fixo */}
        </h1>
      </header>
    </motion.section>
  );
});

Hero.displayName = 'Hero';
export default Hero;