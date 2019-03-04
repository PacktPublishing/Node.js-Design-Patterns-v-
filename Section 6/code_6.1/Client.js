const Socket = require("ws");
const uuid = require("uuid/v4");

class Client {
  constructor(wsUri) {
    this.socket = new Socket(wsUri);
    this.socket.on("message", msg =>
      this.receiveMessage.call(this, JSON.parse(msg))
    );
    this.handlers = {};
  }
  receiveMessage({key, correlationId, reply}) {
    if (key === "reply" && typeof this.handlers[correlationId] === "function") {
      this.handlers[correlationId](reply);
      delete this.handlers[correlationId];
    }
  }
  send(textToProcess, callback) {
    this.socket.on("open", () => {
      const correlationId = uuid();
      this.handlers[correlationId] = callback;
      const payload = JSON.stringify({
        key: "request",
        textToProcess,
        correlationId
      });
      this.socket.send(payload);
    });
  }
}

module.exports = Client;
