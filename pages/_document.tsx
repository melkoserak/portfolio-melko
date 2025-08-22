// Em: pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" type="image/png" href="/images/logo-favicon.png" />
        {/* A importação da fonte foi removida daqui */}
      </Head>
      <body className="is-preload">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}