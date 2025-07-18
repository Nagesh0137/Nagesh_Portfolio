/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // Remove basePath and assetPrefix for custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/Nagesh_Portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Nagesh_Portfolio/' : '',
}

export default nextConfig
