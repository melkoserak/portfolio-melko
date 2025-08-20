// Em: components/common/ThemeToggleButton.tsx

import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ThemeToggleButton.module.css';

interface ThemeToggleButtonProps {
  labelLight: string;
  labelDark: string;
}

export const ThemeToggleButton = ({ labelLight, labelDark }: ThemeToggleButtonProps) => {
  const { theme, toggleTheme } = useTheme();
  const ariaLabel = theme === 'light' ? labelDark : labelLight;

  return (
    <motion.button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={ariaLabel} // Usa a prop traduzida
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
};