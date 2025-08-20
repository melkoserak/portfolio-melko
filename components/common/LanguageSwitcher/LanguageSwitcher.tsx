// Em: components/common/LanguageSwitcher/LanguageSwitcher.tsx

import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  label: string;
}

const LanguageSwitcher = memo(({ label }: LanguageSwitcherProps) => {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query } = router;

  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    <div className={styles.switcher}>
      {otherLocales?.map((locale) => {
        const title = `${label} ${locale.toUpperCase()}`;
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            locale={locale}
            className="button"
            aria-label={title} // Mantém para acessibilidade
            title={title}      // Adiciona para o tooltip no hover
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