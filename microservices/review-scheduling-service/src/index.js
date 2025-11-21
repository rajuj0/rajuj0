const express = require('express');
require('dotenv').config();
const reviewsRouter = require('./routes/reviews');

const app = express();
app.use(express.json());
app.use('/reviews', reviewsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'review-scheduling-service' });
});

const port = process.env.REVIEW_SERVICE_PORT || 4004;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Review scheduling service running on ${port}`);
});
