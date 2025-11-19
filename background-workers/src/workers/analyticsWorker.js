const amqp = require('amqplib');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.ANALYTICS_DB_URL || process.env.ANALYTICS_DATABASE_URL,
  max: 5
});

async function startAnalyticsWorker() {
  const connection = await amqp.connect(process.env.AMQP_URL || 'amqp://rabbitmq:5672');
  const channel = await connection.createChannel();
  const queueName = process.env.ANALYTICS_QUEUE || 'analytics';
  await channel.assertQueue(queueName, { durable: true });
  channel.consume(queueName, async (msg) => {
    if (!msg) return;
    const content = JSON.parse(msg.content.toString());
    await pool.query('INSERT INTO analytics_jobs(type, payload) VALUES($1,$2)', [content.type, content.payload]);
    channel.ack(msg);
  });
}

module.exports = { startAnalyticsWorker };
