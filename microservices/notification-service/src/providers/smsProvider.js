async function sendSms({ to, message }) {
  // Placeholder for integrating with an SMS provider (e.g., Twilio)
  // eslint-disable-next-line no-console
  console.log(`Sending SMS to ${to}: ${message}`);
  return { to, message };
}

module.exports = { sendSms };
