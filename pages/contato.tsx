// Em: pages/contato.tsx

import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../lib/constants';
import styles from '../styles/pages/Contato.module.css';
import { GetStaticProps } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import pt from '../locales/pt.json'; // Importa as traduções padrão

interface ContatoProps {
  t: { [key: string]: string };
}

export default function Contato({ t = pt }: ContatoProps) { // Define 'pt' como valor padrão
  return (
    <Layout title={t.navContact}>
      <motion.div
        className={styles.pageContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.contentWrapper}>
          <h1>{t.contactTitle}</h1>
          <p>{t.contactP1}</p>

          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.emailLink}>
            {CONTACT_EMAIL}
          </a>

          <div className={styles.socialSection}>
            <ul className={styles.icons}>
              {SOCIAL_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ContatoProps> = async ({ locale }) => {
  const jsonPath = path.join(process.cwd(), 'locales', `${locale || 'pt'}.json`);
  const fileContent = await fs.readFile(jsonPath, 'utf8');
  const t = JSON.parse(fileContent);

  return {
    props: {
      t,
    },
  };
};