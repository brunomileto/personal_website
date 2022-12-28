/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.graphassets.com"],
    },
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["en", "pt-BR"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;