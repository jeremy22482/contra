const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  compress: true,
  experimental: {
    concurrentFeatures: true,
  },
  images: {
    domains: ["cdn.websessions.co"],
  }
}

// place all environment variables you want the client to have access to inside next.config.js. 
// Keep all server-only variables strictly inside .env.local.
// https://medium.com/frontend-digest/environment-variables-in-next-js-9a272f0bf655
