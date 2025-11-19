const express = require('express');
const { sendSms } = require('../providers/smsProvider');
const { sendEmail } = require('../providers/emailProvider');

const router = express.Router();

router.post('/sms', async (req, res) => {
  const { to, message } = req.body;
  await sendSms({ to, message });
  res.status(202).json({ status: 'queued' });
});

router.post('/email', async (req, res) => {
  const { to, subject, body } = req.body;
  await sendEmail({ to, subject, body });
  res.status(202).json({ status: 'queued' });
});

module.exports = router;
