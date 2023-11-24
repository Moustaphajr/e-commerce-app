/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "whefdfcgusuyqfvupico.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/avatar/**",
      },
    ],
  },
};
