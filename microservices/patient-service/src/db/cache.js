const { createClient } = require('redis');

const cache = createClient({
  url: process.env.REDIS_URL || 'redis://cache:6379'
});

cache.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Redis error (patient-service)', err);
});

(async () => {
  if (!cache.isOpen) {
    await cache.connect();
  }
})();

module.exports = { cache };
