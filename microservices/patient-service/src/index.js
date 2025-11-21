const express = require('express');
require('dotenv').config();
const patientsRouter = require('./routes/patients');

const app = express();
app.use(express.json());
app.use('/patients', patientsRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'patient-service' });
});

const port = process.env.PATIENT_SERVICE_PORT || 4001;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Patient service running on ${port}`);
});
