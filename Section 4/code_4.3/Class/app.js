import CurrencyConverter from "./CurrencyConverter";

class Cost {
  @CurrencyConverter("INR", "USD")
  compute(qty, price) {
    return Promise.resolve(qty * price);
  }
}

const price = new Cost();
price.compute(20, 5).then(result => console.log(result));