/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  // basePath: "/", // repo name for GitHub Pages
  images: { unoptimized: true }, // fixes Next Image
};

module.exports = nextConfig;
