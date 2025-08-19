// Em: components/common/LanguageSwitcher/LanguageSwitcher.tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query } = router;

  // Filtra para não mostrar o idioma que já está ativo
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    <div className={styles.switcher}>
      {otherLocales?.map((locale) => {
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            locale={locale}
            className={styles.link}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;