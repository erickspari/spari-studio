import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig = {
  reactStrictMode: true,
  experimental: { runtime: "edge" },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default withNextIntl(nextConfig);
