/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  experimental: {
    nftTracing: true
  }
}

module.exports = nextConfig
