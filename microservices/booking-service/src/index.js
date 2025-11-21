const express = require('express');
require('dotenv').config();
const bookingsRouter = require('./routes/bookings');

const app = express();
app.use(express.json());
app.use('/bookings', bookingsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'booking-service' });
});

const port = process.env.BOOKING_SERVICE_PORT || 4005;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Booking service running on ${port}`);
});
