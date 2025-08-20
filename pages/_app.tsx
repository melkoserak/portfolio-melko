// Em: pages/_app.tsx

import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

// Configure a fonte "Inter"
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  // A opção 'variable' não é mais necessária aqui
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      {/* Aplicamos a classe da fonte diretamente aqui */}
      <main className={inter.className}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}