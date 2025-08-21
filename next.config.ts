/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/GoMedGo-website",
  assetPrefix: "/GoMedGo-website/",
};

module.exports = nextConfig;
