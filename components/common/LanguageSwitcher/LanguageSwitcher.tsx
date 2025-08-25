// Em: components/common/LanguageSwitcher/LanguageSwitcher.tsx

import { memo } from 'react';
import { useLanguage } from '../../../context/LanguageContext'; // Use o nosso novo hook
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = memo(() => {
  const { locale, setLocale, t } = useLanguage();

  // Determina qual o próximo idioma a ser mostrado
  const otherLocale = locale === 'pt' ? 'en' : 'pt';

  const handleSwitch = () => {
    setLocale(otherLocale);
  };

  const title = `${t.switchLanguage} ${otherLocale.toUpperCase()}`;

  return (
    <div className={styles.switcher}>
      <button
        onClick={handleSwitch}
        className={`button ${styles.tooltipWrapper}`}
        aria-label={title}
        data-tooltip={title}
      >
        {otherLocale.toUpperCase()}
      </button>
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
export default LanguageSwitcher;