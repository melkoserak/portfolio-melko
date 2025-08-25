// Em: context/LanguageContext.tsx

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Importa todos os textos de cada idioma
import ptTranslations from '../locales/pt/common.json';
import enTranslations from '../locales/en/common.json';
import ptDividi from '../locales/pt/dividi.json';
import enDividi from '../locales/en/dividi.json';
import ptTryb from '../locales/pt/tryb.json';
import enTryb from '../locales/en/tryb.json';
import ptSonic from '../locales/pt/sonic.json';
import enSonic from '../locales/en/sonic.json';
import ptGoldenBear from '../locales/pt/golden-bear.json';
import enGoldenBear from '../locales/en/golden-bear.json';

// Combina todos os arquivos de tradução em um único objeto por idioma
const translations = {
  pt: {
    ...ptTranslations,
    dividi: ptDividi,
    tryb: ptTryb,
    sonic: ptSonic,
    goldenBear: ptGoldenBear,
  },
  en: {
    ...enTranslations,
    dividi: enDividi,
    tryb: enTryb,
    sonic: enSonic,
    goldenBear: enGoldenBear,
  },
};

type Locale = 'pt' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.pt; // O tipo dos textos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('pt'); // Português como padrão

  useEffect(() => {
    // Tenta carregar o idioma salvo no navegador
    const savedLocale = window.localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'pt' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    window.localStorage.setItem('locale', newLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};