/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow loading content from the external statichtmls domain in iframes
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "frame-src https://web.saravanjs.com 'self';",
        },
      ],
    },
  ],
}

export default nextConfig
