const express = require('express');
require('dotenv').config();
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/users', usersRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'user-management-service' });
});

const port = process.env.USER_SERVICE_PORT || 4002;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`User service running on ${port}`);
});
