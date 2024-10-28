/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  optimizeFonts: false,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogger.googleusercontent.com",
        port: "",
        pathname: "/img/**"
      }
    ]
  }
}

module.exports = nextConfig
