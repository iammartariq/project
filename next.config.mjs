/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['e719-139-135-45-160.ngrok-free.app', '*.ngrok-free.app'],
  typescript: {
    ignoreBuildErrors: true, // Set to true only for emergency
    tsconfigPath: './tsconfig.json'
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [{
      hostname: 's3.amazonaws.com',
    }]
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    YEARLY_MEDITATION_PLAN: process.env.YEARLY_MEDITATION_PLAN,
    MONTHLY_MEDITATION_PLAN: process.env.MONTHLY_MEDITATION_PLAN,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  }
};

export default nextConfig;
