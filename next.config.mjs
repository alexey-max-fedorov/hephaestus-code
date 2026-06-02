/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://use-gaia-ai.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
