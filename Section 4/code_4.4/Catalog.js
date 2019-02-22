const Item = require("./Item");

class Catalog extends Item {
  constructor(name) {
    super(name, "Catalog");
    this.collection = [];
  }
  add(product) {
    this.collection.push(product);
    return this;
  }
  getDetails() {
    console.log(this.getName().toUpperCase());
    this.collection.forEach(item => item.getDetails());
  }
}

module.exports = Catalog;