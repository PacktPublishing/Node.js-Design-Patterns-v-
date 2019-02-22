const events = require("./EventBus");
const colors = require("colors");

class Store {
  constructor() {
    events.on("new-post", data => this.writeToDb(data));
  }
  writeToDb({topic, message}) {
    console.log(
      colors.red(
        `STORE ::: Storing "${colors.yellow(
          message
        )}" under TOPIC :: ${topic.toUpperCase()}`
      )
    );
  }
}

module.exports = new Store();
