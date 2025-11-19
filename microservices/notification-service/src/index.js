const express = require('express');
require('dotenv').config();
const notificationsRouter = require('./routes/notifications');

const app = express();
app.use(express.json());
app.use('/notifications', notificationsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'notification-service' });
});

const port = process.env.NOTIFICATION_SERVICE_PORT || 4006;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Notification service running on ${port}`);
});
