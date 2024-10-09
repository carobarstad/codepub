/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.russh.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Add your domain here if fetching images from external src
      },
    ],
  },
};

export default nextConfig;
