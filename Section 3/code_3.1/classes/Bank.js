let accounts = [];
const findAccount = Symbol("findAccount");

class Bank {
  [findAccount](name) {
    return accounts.find(acc => acc.name === name);
  }
  createAccount(name, monies = 0) {
    if (!this[findAccount](name)) {
      accounts.push({
        name,
        monies
      });
    } else {
      console.log("An account already exists");
    }
  }
  credit(name, amount) {
    if (this[findAccount](name)) {
      accounts.forEach(acc => {
        if (acc.name === name) {
          acc.monies = acc.monies + amount;
        }
      });
    }
  }
  getFunds(name) {
    if (this[findAccount](name)) {
      return accounts.find(acc => acc.name === name)["monies"];
    }
    return "Account not found!";
  }
}

module.exports = new Bank();