import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      // Redirect ancien slug /en/a-propos → /en/about (301 permanent)
      {
        source: '/en/a-propos',
        destination: '/en/about',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
