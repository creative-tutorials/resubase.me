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
      {
        source: '/upgrade',
        destination: 'https://resubase.lemonsqueezy.com/checkout/buy/ab215088-c7ec-4e04-95f3-fefac0cfae57?embed=1&dark=1', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/start-now',
        destination: 'https://resubase.vercel.app', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
