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
  t: { [key: string]: string }; // 1. Adicionar 't' à interface de props
}

// 2. Adicionar 't' à desestruturação das props
const Layout = memo(({ children, title, description, t }: LayoutProps) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  const seoTitle = title
    ? `${title} - Melko Serak Neto - Design Portfólio`
    : 'Melko Serak Neto - Design Portfólio';

  const seoDescription = description ||
    'Utilizando o Design gosto de descobrir insights baseados em dados e construir soluções para os usuários dentro de um time diverso e colaborativo.';

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          type: 'website',
          locale: 'pt_BR',
          url: 'https://www.melkoserak.com/',
          siteName: 'Melko Serak Neto - Design Portfólio',
          images: [
            {
              url: '/logo-melko-compartilhar.gif',
              alt: 'Melko Serak Logo'
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      
      <Menu isOpen={isOpen} onClose={closeMenu} />

      <div className={`${styles.wrapper} ${isOpen ? styles.menuVisible : ''}`}>
        {/* Agora a variável 't' existe e pode ser passada para o Header */}
        <Header onMenuToggle={toggleMenu} isMenuOpen={isOpen} t={t} />
        
        <main className={styles.main} id="main">
          {/* A div .inner foi removida, conforme discutimos */}
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
});

Layout.displayName = 'Layout';
export default Layout;