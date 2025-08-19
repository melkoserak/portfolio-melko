// Em: components/common/Layout/Layout.tsx

import { ReactNode, memo } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import { useMenu } from '../../../hooks/useMenu';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = memo(({ children, title, description }: LayoutProps) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  const seoTitle = title
    ? `${title} - Melko Serak Neto - Design Portfólio`
    : 'Melko Serak Neto - Design Portfólio';

  const seoDescription = description ||
    'Utilizando o Design gosto de descobrir insights baseados em dados e construir soluções para os usuários dentro de um time diverso e colaborativo.';

  return (
    // Usamos um Fragment <> para agrupar os elementos sem adicionar uma div extra
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          // ... (suas configurações de SEO continuam aqui)
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      
      {/* O Menu agora é um "irmão" da div wrapper, e não um "filho" */}
      <Menu isOpen={isOpen} onClose={closeMenu} />

      {/* Esta é a div que ficará com opacidade quando o menu abrir */}
      <div className={`${styles.wrapper} ${isOpen ? styles.menuVisible : ''}`}>
        <Header onMenuToggle={toggleMenu} isMenuOpen={isOpen} />
        
        <main className={styles.main} id="main">
          <div className="page-container">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
});

Layout.displayName = 'Layout';
export default Layout;