import { memo } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS } from '../../../lib/constants';
import { MenuProps } from '../../../lib/types';
import styles from './Menu.module.css';

const Menu = memo(({ isOpen, onClose }: MenuProps) => {
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    onClose();
    // Apenas redireciona, a animação é controlada pelo _app
    router.push(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          <motion.aside
            className={styles.menu}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className={styles.inner}>
              <h2 className={styles.menuTitle}>Menu</h2>
              <nav role="navigation" aria-label="Navegação principal">
                <ul className={styles.menuList}>
                  {NAVIGATION_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                      <button
                        type="button"
                        onClick={() => handleLinkClick(href)}
                        className={styles.menuLink}
                        aria-current={router.pathname === href ? 'page' : undefined}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Fechar menu"
            />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
});

Menu.displayName = 'Menu';
export default Menu;