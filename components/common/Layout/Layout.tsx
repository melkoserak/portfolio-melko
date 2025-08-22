// Em: components/common/Layout/Layout.tsx

import { ReactNode, memo } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import { useMenu } from '../../../hooks/useMenu';
import styles from './Layout.module.css';
import Breadcrumbs from '../Breadcrumbs'; // ADICIONE ESTE IMPORT

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonicalPath?: string;
}

const Layout = memo(({ children, title, description, canonicalPath }: LayoutProps) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  const seoTitle = title
    ? `${title} - Melko Serak Neto - Design Portfólio`
    : 'Melko Serak Neto - Design Portfólio';

  const seoDescription =
    description ||
    'Utilizando o Design gosto de descobrir insights baseados em dados e construir soluções para os usuários dentro de um time diverso e colaborativo.';
  
  const canonicalUrl = canonicalPath ? `https://www.melkoserak.com${canonicalPath}` : undefined;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: 'https://www.melkoserak.com/images/logo-melko-compartilhar.gif',
              width: 800,
              height: 600,
              alt: 'Melko Serak Logo',
            },
          ],
          site_name: 'Melko Serak Portfólio',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <Menu isOpen={isOpen} onClose={closeMenu} />

      <div className={`${styles.wrapper} ${isOpen ? styles.menuVisible : ''}`}>
        <Header onMenuToggle={toggleMenu} isMenuOpen={isOpen} />

         {/* ADICIONE O BREADCRUMB DENTRO DE UM page-container */}
        <div className="page-container">
          <Breadcrumbs />
        </div>
        
        {/* A DIV ABAIXO FOI RESTAURADA PARA CORRIGIR O CSS */}
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