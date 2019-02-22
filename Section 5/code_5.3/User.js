const events = require("./EventBus");
const colors = require("colors");

class User {
  constructor(name) {
    this.name = name;
    events.on("new-post", ({topic, subscribers}) =>
      subscribers.includes(this.name) ? this.notify(topic) : null
    );
  }
  get getName() {
    return this.name;
  }
  notify(topic) {
    console.log(
      colors.green(
        `NOTIFICATION ::: ${
          this.name
        }, a new message has been posted under ${topic}`
      )
    );
  }
}

module.exports = User;
