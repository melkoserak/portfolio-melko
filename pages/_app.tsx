// Em: pages/_app.tsx
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '../context/ThemeContext'; // Manteremos o ThemeProvider por enquanto
import '../styles/globals.css';
import { Inter } from 'next/font/google'; // 1. Importe a nova fonte

// 2. Configure a fonte "Inter"
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-inter' // 3. Conecta com a nossa variável CSS
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <main className={`${inter.variable}`}>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </main>
    </ThemeProvider>
  );
}