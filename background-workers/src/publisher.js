const amqp = require('amqplib');
require('dotenv').config();

let channel;

async function getChannel() {
  if (channel) return channel;
  const connection = await amqp.connect(process.env.AMQP_URL || 'amqp://rabbitmq:5672');
  channel = await connection.createChannel();
  return channel;
}

async function publishMessage(queueName, message) {
  const ch = await getChannel();
  await ch.assertQueue(queueName, { durable: true });
  ch.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), { persistent: true });
}

module.exports = { publishMessage };
