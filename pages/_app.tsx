// Em: pages/_app.tsx


import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext'; // <-- IMPORTE AQUI


// Configure a fonte "Inter"
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-family-body', // Adicionar variável de fonte
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <LanguageProvider> {/* <-- ADICIONE O PROVIDER AQUI */}
        <main className={inter.className}>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </main>
      </LanguageProvider> {/* <-- E FECHE-O AQUI */}
    </ThemeProvider>
  );
}