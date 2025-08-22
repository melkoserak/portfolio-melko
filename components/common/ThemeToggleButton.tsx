// Em: components/common/ThemeToggleButton.tsx

import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ThemeToggleButton.module.css';
import { useRouter } from 'next/router';

const content = {
  pt: {
    toggleThemeToDark: 'Mudar para tema escuro',
    toggleThemeToLight: 'Mudar para tema claro',
  },
  en: {
    toggleThemeToDark: 'Switch to dark theme',
    toggleThemeToLight: 'Switch to light theme',
  }
}

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale } = useRouter();
  const t = locale === 'en' ? content.en : content.pt;
  const title = theme === 'light' ? t.toggleThemeToDark : t.toggleThemeToLight;

  return (
    <motion.button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={title}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-tooltip={title} // Adicione o texto do tooltip aqui
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
};