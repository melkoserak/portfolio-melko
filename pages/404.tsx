// Em: pages/404.tsx

import Layout from '../components/common/Layout';
import Link from 'next/link';
import styles from '../styles/pages/Error.module.css';

export default function Custom404() {
  return (
    <Layout title="Página Não Encontrada">
      <div className={styles.container}>
        <h1>404 - Página Não Encontrada</h1>
        <p>
          Opa! Parece que a página que você está procurando não existe.
        </p>
        <Link href="/" className={styles.homeLink}>
          Voltar para a página inicial
        </Link>
      </div>
    </Layout>
  );
}