/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.producthunt.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['api.producthunt.com'],
  },
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://x.com/treasuredev_', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://tally.so/r/meQxol', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
