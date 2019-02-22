const Payment = require("./Payment");
const Chase = require("./Chase");
const Citibank = require("./Citibank");

const payment = new Payment();

payment.pay(new Chase(200, "002340112450"));
payment.pay(new Citibank(150, "00120198765"));

payment.refund(new Chase(50, "002340112450"));
