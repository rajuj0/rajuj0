const express = require('express');
require('dotenv').config();
const analyticsRouter = require('./routes/analytics');

const app = express();
app.use(express.json());
app.use('/analytics', analyticsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'analytics-service' });
});

const port = process.env.ANALYTICS_SERVICE_PORT || 4003;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Analytics service running on ${port}`);
});
