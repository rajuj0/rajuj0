const path = require('path');
const schemas = require(path.resolve(__dirname, '../../../../background-workers/src/schemas'));
const { publishMessage } = require(path.resolve(__dirname, '../../../../background-workers/src/publisher'));

async function publishBookingEvent(booking) {
  const payload = schemas.bookingCreated(booking);
  await publishMessage(process.env.BOOKING_QUEUE || 'bookings', payload);
}

module.exports = { publishBookingEvent };
