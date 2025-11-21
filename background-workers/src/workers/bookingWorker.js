const amqp = require('amqplib');
const { Pool } = require('pg');
require('dotenv').config();
const { sendSms } = require('../../../microservices/notification-service/src/providers/smsProvider');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5
});

async function startBookingWorker() {
  const connection = await amqp.connect(process.env.AMQP_URL || 'amqp://rabbitmq:5672');
  const channel = await connection.createChannel();
  const queueName = process.env.BOOKING_QUEUE || 'bookings';
  await channel.assertQueue(queueName, { durable: true });
  channel.consume(queueName, async (msg) => {
    if (!msg) return;
    const content = JSON.parse(msg.content.toString());
    await pool.query('INSERT INTO booking_events(type, payload) VALUES($1,$2)', [content.type, content.payload]);
    await sendSms({
      to: process.env.NOTIFICATION_TEST_NUMBER || '+10000000000',
      message: `Booking confirmed for patient ${content.payload.patientId}`
    });
    channel.ack(msg);
  });
}

module.exports = { startBookingWorker };
