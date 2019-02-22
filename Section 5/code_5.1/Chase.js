const Bank = require("./Bank");

class Chase extends Bank {
  processPayment() {
    console.log(
      `Your payment of ${this.amount} for ${
        this.account
      } has been processed by Chase`
    );
  }
  processRefund() {
    console.log(
      `A refund of amount ${this.amount} for ${
        this.account
      } has been processed by Chase`
    );
  }
}

module.exports = Chase;
