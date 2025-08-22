// Em: components/common/Breadcrumbs.tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion'; // 1. Importe o motion
import styles from './Breadcrumbs.module.css';

const translations: { [key: string]: { [key: string]: string } } = {
  pt: {
    projetos: 'Projetos',
  },
  en: {
    projetos: 'Projects',
  },
};

const Breadcrumbs = () => {
  const router = useRouter();
  const { asPath, locale } = router;

  if (asPath === '/') {
    return null;
  }

  const pathSegments = asPath.split('/').filter((segment) => segment);
  const currentTranslations = translations[locale || 'pt'];

  return (
    // 2. Troque 'nav' por 'motion.nav' e adicione as propriedades de animação
    <motion.nav
      aria-label="Breadcrumb"
      className={styles.breadcrumbs}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <ol>
        <li>
          <Link href="/" aria-label="Página Inicial">
            <FaHome />
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          // Capitaliza a primeira letra para uma melhor apresentação
          const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
          const translatedSegment = currentTranslations[segment] || formattedSegment;

          return (
            <li key={href}>
              <span className={styles.separator}>/</span>
              {isLast ? (
                <span aria-current="page">{translatedSegment}</span>
              ) : (
                <Link href={href}>{translatedSegment}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumbs;