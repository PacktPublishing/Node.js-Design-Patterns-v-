import axios from "axios";

const CurrencyConverter = (base, to) => {
  return function (target, name, descriptor) {
    try {
      const fn = descriptor.value; // The original function
      descriptor.value = async (...args) => {
        // Define the decorator
        const result = await fn.call(this, ...args);
        const currencyRate = await axios(`https://free.currencyconverterapi.com/api/v6/convert?q=${to.toUpperCase()}_${base.toUpperCase()}&compact=y`);

        return await (currencyRate.data[`${to.toUpperCase()}_${base.toUpperCase()}`]["val"] * result);
      }

      return descriptor;
    } catch (error) {
      console.log(error);
    }
  }
}

export default CurrencyConverter;