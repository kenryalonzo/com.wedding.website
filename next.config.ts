import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compression Gzip/Brotli activée (défaut true, explicite ici)
  compress: true,

  // Optimisation des images (WebP / AVIF auto-format)
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache des images optimisées pendant 7 jours
    minimumCacheTTL: 604800,
    // Tailles device courantes — évite de générer des variantes inutiles
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers HTTP pour la performance et la sécurité
  async headers() {
    return [
      {
        // S'applique à toutes les routes
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Assets JS/CSS immuables générés par Next.js — cache 1 an
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Fichiers statiques du dossier /public (images, fonts…)
        // minimumCacheTTL couvre déjà /_next/image (Image Optimization API)
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
