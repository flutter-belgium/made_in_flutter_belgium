/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  env: {
    locale: 'nl',
    basePath: '/',
  },
  images: {
    domains: [
      'api.madein.flutterbelgium.be',
    ],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  },
}

module.exports = nextConfig
