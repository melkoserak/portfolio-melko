// Em: pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" type="image/png" href="/images/logo-favicon.png" />
        {/* A importação da fonte foi removida daqui */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/brands.min.css" 
        />
      </Head>
      <body className="is-preload">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}