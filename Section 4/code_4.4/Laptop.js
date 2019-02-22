const Item = require("./Item");

class Laptop extends Item {
  constructor(name, model, cost) {
    super(name, "Laptop");
    this.model = model;
    this.cost = cost;
  }
  getDetails() {
    console.log(`${this.getName()} ${this.model}, priced at INR ${this.cost}`);
  }
}

module.exports = Laptop;