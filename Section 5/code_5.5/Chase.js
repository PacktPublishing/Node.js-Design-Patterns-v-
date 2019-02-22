const Bank = require("./Bank");

class Chase extends Bank {
  constructor() {
    super();
  }
  processCredit(name, amount) {
    const getAccount = this._getAccount(name);
    if (getAccount) {
      getAccount.funds = getAccount.funds + amount;
    } else {
      console.log("Account not found!");
    }
  }
  processDebit(name, amount) {
    const getAccount = this._getAccount(name);
    if (getAccount) {
      const debitAmount = getAccount.funds - amount;
      getAccount.funds = debitAmount <= 0 ? getAccount.funds : debitAmount;
    } else {
      console.log("Account not found!");
    }
  }
}

module.exports = Chase;
