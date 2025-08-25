// Em: components/sections/CtaSection/CtaSection.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CtaSection.module.css';
import Aurora from '../../common/aurora'; // Importe a nova animação
import { FiZap, FiCpu, FiBarChart2 } from 'react-icons/fi'; // Ícones novos e mais finos

interface CtaSectionProps {
  t: { [key: string]: any };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CtaSection = memo(({ t }: CtaSectionProps) => {
  return (
    <div className={styles.wrapper}>
      {/* Componente de animação atualizado aqui */}
      <div className={styles.background}>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <motion.section
      className={styles.ctaSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Garante que a animação rode quando 20% da seção estiver visível
      >
        <motion.h2 variants={itemVariants} className={styles.mainTitle}>
          {t.ctaTitle}
        </motion.h2>
        
        <div className={styles.grid}>
          <motion.div variants={itemVariants} className={styles.gridItem}>
            <FiZap className={styles.icon} />
            <h3 className={styles.itemTitle}>{t.ctaPhilosophyTitle}</h3>
            <p>{t.ctaPhilosophyText}</p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.gridItem}>
            <FiCpu className={styles.icon} />
            <h3 className={styles.itemTitle}>{t.ctaSkillsTitle}</h3>
            <p>{t.ctaSkillsText}</p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.gridItem}>
            <FiBarChart2 className={styles.icon} />
            <h3 className={styles.itemTitle}>{t.ctaDataTitle}</h3>
            <p>{t.ctaDataText}</p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Link href="/contato" className={`button ${styles.ctaButton}`}>
            {t.ctaButtonText}
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
});

CtaSection.displayName = 'CtaSection';
export default CtaSection;