async function sendEmail({ to, subject, body }) {
  // Placeholder for integrating with email provider (e.g., SES, SendGrid)
  // eslint-disable-next-line no-console
  console.log(`Sending Email to ${to}: ${subject}`);
  return { to, subject, body };
}

module.exports = { sendEmail };
