/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ... (suas outras configs)

  // Adicione esta configuração
  i18n: {
    locales: ['pt', 'en'], // Idiomas suportados
    defaultLocale: 'pt',   // Idioma padrão
  },
};

module.exports = nextConfig;