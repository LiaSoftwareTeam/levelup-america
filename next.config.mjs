/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mantiene buenas prácticas, pero no afecta rendimiento.
  swcMinify: true, // Usa SWC para minificar más rápido.
  experimental: {
    turbo: false, // Activa optimización experimental con Turbo.
  },
};

export default nextConfig;
