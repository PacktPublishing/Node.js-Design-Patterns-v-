const amqp = require("amqplib");
const amqpUri = "amqp://localhost";
module.exports = () => amqp.connect(amqpUri);
