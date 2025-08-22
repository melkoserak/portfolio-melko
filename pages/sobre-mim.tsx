// Em: pages/sobre-mim.tsx

import Layout from '../components/common/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/pages/SobreMim.module.css';
import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import pt from '../locales/pt.json'; // Importa as traduções padrão

interface SobreMimProps {
  t: { [key: string]: string };
}

export default function SobreMim({ t = pt }: SobreMimProps) { // Define 'pt' como valor padrão
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
            <a
              href="/images/melko-curriculo.pdf"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.aboutResume}
            </a>
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

export const getStaticProps: GetStaticProps<SobreMimProps> = async ({ locale }) => {
  const jsonPath = path.join(process.cwd(), 'locales', `${locale || 'pt'}.json`);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const t = JSON.parse(fileContent);

  return {
    props: {
      t,
    },
  };
};