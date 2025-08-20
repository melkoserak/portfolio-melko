// Em: components/common/Header/Header.tsx

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { ThemeToggleButton } from '../ThemeToggleButton';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTheme } from '../../../context/ThemeContext';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
  t: { [key: string]: string }; // Recebe o objeto de tradução
}

const Header = memo(({ onMenuToggle, isMenuOpen, t }: HeaderProps) => {
  const { theme } = useTheme();

  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="header"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Voltar para a página inicial">
          <span className={styles.symbol}>
            <Image
              src={theme === 'dark' ? "/images/logo-melko-white.svg" : "/images/logo-melko.svg"}
              alt="Logo Melko Serak"
              width={64}
              height={64}
              priority
            />
          </span>
        </Link>
        
        <nav className={styles.nav}>
          {/* Passa as traduções para os componentes */}
          <LanguageSwitcher label={t.switchLanguage} />
          <ThemeToggleButton 
            labelLight={t.toggleThemeToLight}
            labelDark={t.toggleThemeToDark}
          />
          <motion.button
            type="button"
            onClick={onMenuToggle}
            className="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
});

Header.displayName = 'Header';
export default Header;