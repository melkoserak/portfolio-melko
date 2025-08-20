// Em: components/common/Footer/Footer.tsx

import { memo } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../../../lib/constants';
import styles from './Footer.module.css';
import { FaLinkedin, FaBehance } from 'react-icons/fa';

const icons: { [key: string]: React.ElementType } = {
  linkedin: FaLinkedin,
  behance: FaBehance,
};

const Footer = memo(() => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="footer"
    >
      <div className={styles.inner}>
        <section className={styles.contactSection}>
          <p>{CONTACT_EMAIL}</p>
        </section>

        <section className={styles.socialSection}>
          <ul className={styles.icons}>
            {/* CORREÇÃO: Adicionamos uma verificação para garantir que SOCIAL_LINKS existe antes de mapear */}
            {SOCIAL_LINKS && SOCIAL_LINKS.map(({ href, label, icon }) => {
              const IconComponent = icons[icon];
              return (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={label}
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </motion.footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;