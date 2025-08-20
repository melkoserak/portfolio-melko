// Em: components/common/ThemeToggleButton.tsx

import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ThemeToggleButton.module.css';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
};