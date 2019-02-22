function Pizza() {
  this.pizza = {}
  this.setBase = base => this.pizza.base = base;
  this.setSauce = sauce => this.pizza.sauce = sauce;
  this.setCheese = cheese => this.pizza.cheese = cheese;
  this.setToppings = toppings => this.pizza.toppings = toppings;
  this.bake = () => console.log(this.pizza);
}

module.exports = Pizza;