/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    serverComponentsExternalPackages: ['sequelize', 'sequelize-typescript']
  },
  images: {
    domains: ['tailwindui.com', 'fonts.googleapis.com', 'ekognition.nyc3.amazonaws.com']
  }
}

export default nextConfig
