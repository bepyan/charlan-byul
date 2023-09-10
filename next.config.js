const withPWA = require('next-pwa')({
  dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
