// Em: next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // Adicione este bloco para desabilitar a otimização de imagem
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;