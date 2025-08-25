// Em: pages/sobre-mim.tsx

import Layout from '../components/common/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/pages/SobreMim.module.css';
import { useLanguage } from '../context/LanguageContext'; // 1. Importe o hook

export default function SobreMim() {
  const { t } = useLanguage(); // 2. Use o hook para obter os textos

  return (
    <Layout title={t.navAbout}>
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.textContainer}>
            <h1>{t.aboutTitle}</h1>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
            <Link href="/experiencia" className="button">
              {t.aboutResume}
            </Link>
          </div>

          <div className={styles.imageContainer}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Image
                src="/images/minha-foto.png"
                alt="Foto de Melko Serak Neto"
                width={300}
                height={300}
                className={styles.profileImage}
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

// 3. getStaticProps foi removido!