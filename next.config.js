/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['pbs.twimg.com'],
  },
  async redirects() {
    return [
      {
        source: '/timi',
        destination: 'https://x.com/treasuredev_', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/kin',
        destination: 'https://x.com/codewithkin', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://tally.so/r/meQxol', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://resubase.lemonsqueezy.com/checkout/buy/ab215088-c7ec-4e04-95f3-fefac0cfae57?embed=1&dark=1', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/start-now',
        destination: 'https://resubase.vercel.app', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/version/v6.6.11',
        destination: 'https://github.com/creative-tutorials/resubase/releases/tag/6.6.11', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/version/v7.7.11',
        destination: 'https://github.com/creative-tutorials/resubase/releases/tag/7.7.11', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/version/v8.8.12',
        destination: 'https://github.com/creative-tutorials/resubase/releases/tag/8.8.12', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/version/v8.9.12',
        destination: 'https://github.com/creative-tutorials/resubase/releases/tag/8.9.12', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
