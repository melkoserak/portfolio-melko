// Em: context/ThemeContext.tsx

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // CORREÇÃO: O valor inicial agora é 'dark'.
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // 1. Verifica se o usuário já escolheu um tema e salvou no navegador.
    const savedTheme = window.localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      return; // Se encontrou, para aqui.
    }

    // 2. Se não há tema salvo, verifica a preferência do sistema operacional.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setTheme('dark');
    } else {
      // 3. Se o sistema prefere claro, definimos como 'light'.
      setTheme('light');
    }
    // O padrão inicial de 'dark' só será usado momentaneamente antes desta lógica rodar.
  }, []);

  useEffect(() => {
    // Aplica o tema ao body e salva a preferência
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
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