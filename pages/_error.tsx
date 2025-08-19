// Em: pages/_error.tsx

import { NextPageContext } from 'next';
import Layout from '../components/common/Layout';
import styles from '../styles/pages/Error.module.css';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Layout title={statusCode ? `Erro ${statusCode}` : 'Erro'}>
      <div className={styles.container}>
        <h1>
          {statusCode
            ? `Ocorreu um erro ${statusCode} no servidor`
            : 'Ocorreu um erro no cliente'}
        </h1>
        <p>
          Pedimos desculpas pelo inconveniente. Por favor, tente novamente mais tarde.
        </p>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;