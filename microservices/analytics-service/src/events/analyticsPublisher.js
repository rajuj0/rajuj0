const path = require('path');
const schemas = require(path.resolve(__dirname, '../../../../background-workers/src/schemas'));
const { publishMessage } = require(path.resolve(__dirname, '../../../../background-workers/src/publisher'));

async function publishAnalyticsRequest(report) {
  const payload = schemas.analyticsRequested(report);
  await publishMessage(process.env.ANALYTICS_QUEUE || 'analytics', payload);
}

module.exports = { publishAnalyticsRequest };
