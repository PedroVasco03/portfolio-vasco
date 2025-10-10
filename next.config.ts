import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.com',
        port: '',
        pathname: '/**', // permite qualquer caminho
      },
    ],
  },
  // Para dev local (LAN)
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.18.6:3000'],
};

export default nextConfig;
