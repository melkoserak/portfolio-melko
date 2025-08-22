// Em: pages/sobre-mim.tsx

import { useRouter } from 'next/router';
import Layout from '../components/common/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // ESTA É A LINHA QUE FALTAVA
import styles from '../styles/pages/SobreMim.module.css';
import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import pt from '../locales/pt.json';

interface SobreMimProps {
  t: { [key: string]: any }; // Mudamos de 'string' para 'any'
}

export default function SobreMim({ t = pt }: SobreMimProps) {
  const router = useRouter(); // Adicionado aqui

  return (
    <Layout title={t.navAbout} canonicalPath={router.asPath}>
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