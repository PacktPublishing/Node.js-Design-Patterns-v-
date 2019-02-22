const Till = require('./CashRegister');
const Till1 = require('./CashRegister');

Till.credit(25);
Till.credit(35);

Till1.credit(20);
console.log(`Total amount in Till 1 : ${Till1.total()}`);

Till.debit(5);
console.log(`Total amount in Till : ${Till.total()}`);