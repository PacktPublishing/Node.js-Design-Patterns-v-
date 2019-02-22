class Bank {
  constructor() {
    this.vault = [];
  }
  createAccount(name, initialDeposit) {
    this.vault.push({
      name,
      funds: initialDeposit
    });
  }
  _getAccount(name) {
    return this.vault.find(account => account.name === name);
  }
  view(name) {
    const getAccount = this._getAccount(name);
    if (getAccount) {
      console.log(`Account [${getAccount.name}] has USD ${getAccount.funds}`);
    } else {
      console.log("Account not found!");
    }
  }
  credit(name, amount) {
    console.log(`Crediting ${amount} to account: ${name}`);
    return this.processCredit(name, amount);
  }
  debit(name, amount) {
    console.log(`Debiting ${amount} from account: ${name}`);
    return this.processDebit(name, amount);
  }
}

module.exports = Bank;
