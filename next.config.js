/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Neu-Maximilian/**",
      },
    ],
    unoptimized: true, // Required for static export
  },
  basePath: "/", // Important for GitHub Pages
  output: "export",
};

module.exports = nextConfig;
