const Bank = require("./Bank");
const user1 = "John Doe";

Bank.createAccount(user1);
Bank.credit(user1, 20);
Bank.credit(user1, 33);
console.log(Bank.getFunds(user1));