const Bank = require("./Bank");
// const logger = require("./console-logger");
const logger = require("./file-logger");
const user1 = "John Doe";
const user2 = "Richard Helm";

Bank.config({
  logger
});

Bank.createAccount(user1);
Bank.credit(user1, 20);
Bank.credit(user1, 50);
Bank.credit(user1, 120);
Bank.debit(user1, 10);
console.log(user2, Bank.getFunds(user1));

Bank.createAccount(user2);
Bank.credit(user2, 200);
Bank.debit(user2, 25);
console.log(user2, Bank.getFunds(user2));