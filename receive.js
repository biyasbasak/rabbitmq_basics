const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = 'hello';

    ch.assertQueue(q, { durable: false });
  });
});