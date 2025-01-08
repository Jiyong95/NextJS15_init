import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    /**
     * @docs https://turbo.build/pack/docs/why-turbopack
     * @description 터보팩 장점
     *
     * @docs https://nextjs.org/docs/app/api-reference/config/next-config-js/turbo
     * @description 터보팩 세팅
     */
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.ts",
        },
      },
    },
  },
};

export default nextConfig;
