require('dotenv').config();
const { startBookingWorker } = require('./workers/bookingWorker');
const { startAnalyticsWorker } = require('./workers/analyticsWorker');

(async () => {
  await Promise.all([startBookingWorker(), startAnalyticsWorker()]);
  // eslint-disable-next-line no-console
  console.log('Background workers ready');
})();
