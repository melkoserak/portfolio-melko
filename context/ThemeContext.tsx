// Em: context/ThemeContext.tsx

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark'); // Mantemos 'dark' como estado inicial

  useEffect(() => {
    // 1. Verifica se o usuário já escolheu um tema e salvou no navegador.
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 2. Se não há tema salvo, define 'dark' como padrão.
      setTheme('dark');
    }
  }, []); // Este useEffect roda apenas uma vez quando o site carrega

  useEffect(() => {
    // Aplica o tema ao body e salva a preferência
    if (theme) {
      document.body.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};