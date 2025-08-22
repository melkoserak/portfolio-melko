// Em: components/common/LanguageSwitcher/LanguageSwitcher.tsx

import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './LanguageSwitcher.module.css';

const content = {
  pt: {
    switchLanguage: 'Mudar idioma para'
  },
  en: {
    switchLanguage: 'Switch language to'
  }
}

const LanguageSwitcher = memo(() => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query } = router;
  const t = activeLocale === 'en' ? content.en : content.pt;

  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    <div className={styles.switcher}>
      {otherLocales?.map((locale) => {
        const title = `${t.switchLanguage} ${locale.toUpperCase()}`;
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            locale={locale}
            className={`button ${styles.tooltipWrapper}`} // Adiciona a classe para o tooltip
            aria-label={title}
            data-tooltip={title} // Adiciona o data-attribute
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
export default LanguageSwitcher;