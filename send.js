const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    let q = 'hello';
    ch.assertQueue(q, { durable: false });
    ch.sendToQueue(q, Buffer.from('hello world!'));
    console.log('[x] sent to hello world');
  });
  setTimeout(function () { conn.close(); process.exit(0) }, 500);

});