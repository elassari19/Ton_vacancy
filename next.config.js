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
<<<<<<< HEAD
  env: {
    BASE_URL: "http://localhost:5000/api/v1",
  },
=======
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
<<<<<<< HEAD
  transpileModules: ["gsap"],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
=======
  transpileModules: ['gsap'],
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
>>>>>>> f8a607d17099ca218811c66bc43c75a80cbe2df5

// module.exports = nextConfig
