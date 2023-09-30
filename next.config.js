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
    domains: ["pbs.twimg.com"],
  },
  async redirects() {
    return [
      {
        source: "/start",
        destination: "https://resubase.vercel.app", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
