const CurrencyConverter = require("./CurrencyConverter");

const Cost = (qty, price) => Promise.resolve(qty * price);
Cost(20, 5).then(result => console.log(result));

// With Converter
const CostPlus = CurrencyConverter(Cost);
CostPlus(20, 5, "INR", "EUR").then(result => console.log(result));