class Item {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getType() {
    return this.type;
  }
  getName() {
    return this.name;
  }
  getDetails() {}
}

module.exports = Item;