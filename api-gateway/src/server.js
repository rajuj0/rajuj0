const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.API_GATEWAY_PORT || 4000;

const services = {
  patients: getTargets('PATIENT_SERVICE_URLS', ['http://patient-service:4001']),
  users: getTargets('USER_SERVICE_URLS', ['http://user-management-service:4002']),
  analytics: getTargets('ANALYTICS_SERVICE_URLS', ['http://analytics-service:4003']),
  reviews: getTargets('REVIEW_SERVICE_URLS', ['http://review-scheduling-service:4004']),
  bookings: getTargets('BOOKING_SERVICE_URLS', ['http://booking-service:4005']),
  notifications: getTargets('NOTIFICATION_SERVICE_URLS', ['http://notification-service:4006'])
};

const serviceCursors = Object.keys(services).reduce((acc, key) => {
  acc[key] = 0;
  return acc;
}, {});

function getTargets(envKey, defaults) {
  const envValue = process.env[envKey];
  if (!envValue) return defaults;
  return envValue.split(',').map((url) => url.trim()).filter(Boolean);
}

function getNextTarget(serviceKey) {
  const targets = services[serviceKey];
  if (!targets || targets.length === 0) {
    throw new Error(`Missing targets for service ${serviceKey}`);
  }
  const cursor = serviceCursors[serviceKey];
  const target = targets[cursor % targets.length];
  serviceCursors[serviceKey] = (cursor + 1) % targets.length;
  return target;
}

function createProxy(serviceKey) {
  return async (req, res) => {
    try {
      const target = getNextTarget(serviceKey);
      const downstreamPath = req.originalUrl.replace(/^\/api/, '');
      const url = `${target}${downstreamPath}`;
      const response = await axios({
        method: req.method,
        url,
        headers: { ...req.headers, host: undefined },
        data: req.body,
        params: req.query,
        timeout: Number(process.env.GATEWAY_REQUEST_TIMEOUT_MS || 10000)
      });
      res.status(response.status).json(response.data);
    } catch (error) {
      const status = error.response?.status || 502;
      const payload = error.response?.data || { message: 'Gateway error', details: error.message };
      res.status(status).json(payload);
    }
  };
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/patients', createProxy('patients'));
app.use('/api/users', createProxy('users'));
app.use('/api/analytics', createProxy('analytics'));
app.use('/api/reviews', createProxy('reviews'));
app.use('/api/bookings', createProxy('bookings'));
app.use('/api/notifications', createProxy('notifications'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found in API gateway' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API Gateway listening on ${port}`);
});
