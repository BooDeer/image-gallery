/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
	  api_key: process.env.REACT_APP_API_KEY,
  }
}

module.exports = nextConfig
