const Chase = require("./Chase");
const bank = new Chase();

bank.createAccount("John Doe", 1000);
bank.credit("John Doe", 500);
bank.debit("John Doe", 250);
bank.view("John Doe");
