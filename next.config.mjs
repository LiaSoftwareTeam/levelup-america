/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mantiene buenas prácticas, pero no afecta rendimiento.
  // swcMinify ya es el valor predeterminado en Next.js 15+
  experimental: {
    // La opción turbo ahora requiere un objeto de configuración o debe eliminarse
  },
};

export default nextConfig;
