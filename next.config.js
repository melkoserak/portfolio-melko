/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            // CORREÇÃO: Adicionamos 'media-src *' para permitir vídeos
            // e 'frame-src figma.com' para permitir iframes do Figma.
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * blob: data:; media-src *; frame-src https://www.figma.com; connect-src *; font-src 'self';",
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // MUDANÇA: 'DENY' era muito restritivo, 'SAMEORIGIN' é mais seguro e flexível.
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig;