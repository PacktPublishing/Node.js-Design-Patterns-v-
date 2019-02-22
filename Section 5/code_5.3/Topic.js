const emitter = require("./EventBus");

class Topic {
  constructor(topic) {
    this.topic = topic;
    this.subscribers = [];
    this.posts = [];
  }
  subscribe(user) {
    this.subscribers.push(user.getName);
  }
  add(msg) {
    this.posts.push(msg);
    this.notify(msg);
  }
  notify(message) {
    emitter.emit("new-post", {
      topic: this.topic,
      message,
      subscribers: this.subscribers
    });
  }
}

module.exports = Topic;
