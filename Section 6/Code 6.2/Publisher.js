const Rabbit = require("./Rabbit");
const readLine = require("readline");
const exchange = "announcements";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const RabbitSays = async message => {
  try {
    const conn = await Rabbit();
    const channel = await conn.createChannel();
    await channel.assertExchange(exchange, "fanout", {durable: false});
    await channel.publish(exchange, "", Buffer.from(message));
    await channel.close();
    return conn.close();
  } catch ({code}) {
    console.log(code === "ECONNREFUSED" ? "RabbitMQ is offline" : code);
    process.exit(0);
  }
};

rl.setPrompt(":> ");
rl.prompt();
rl.on("line", message => {
  if (message === "quit") {
    process.exit(0);
  } else {
    RabbitSays(message);
    rl.prompt();
  }
});
