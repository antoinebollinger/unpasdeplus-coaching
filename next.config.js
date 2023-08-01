/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  optimizeFonts: false,
  env: {
    email_api: "https://abollinger-mailer.vercel.app/api/mailer",
    email_to: "antoine.bollinger@hotmail.fr",
    name_to: "Antoine Bollinger"

    // email_to: "sabrina.appriou@hotmail.fr",
    // name_to: "Sabrina Appriou"
  }
}

module.exports = nextConfig
