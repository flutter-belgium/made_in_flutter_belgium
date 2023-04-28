/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  env: {
    locale: 'nl',
    basePath: '/',
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  },
}

module.exports = nextConfig
