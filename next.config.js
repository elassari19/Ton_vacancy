/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  //   })
  //   return config
  // },
  // images: {
  //   disableStaticImages: true,
  //   loader: "custom",
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpileModules: ['gsap'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}

// module.exports = nextConfig
