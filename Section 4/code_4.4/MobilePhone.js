const Item = require("./Item");

class MobilePhone extends Item {
  constructor(name, color, cost) {
    super(name, "Mobile Phone");
    this.color = color;
    this.cost = cost;
  }
  getDetails() {
    console.log(`${this.getName()} :: ${this.color} color, priced at INR ${this.cost}`);
  }
}

module.exports = MobilePhone;