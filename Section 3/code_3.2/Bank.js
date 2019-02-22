let accounts = [];
const findAccount = Symbol("findAccount");
const trimName = name =>
  `XXXXXXXX${name
    .replace(/\s/g, "")
    .slice(-4)
    .toUpperCase()}`;

const logger = data => console.log(data); // Logs activity to the console

class Bank {
  config({
      logger
    }) {
      this.logger = logger;
    }
    [findAccount](name) {
      return accounts.find(acc => acc.name === name);
    }
  createAccount(name, monies = 0) {
    if (!this[findAccount](name)) {
      accounts.push({
        name,
        monies
      });

      if (this.logger) {
        this.logger.write(`Account created for ${trimName(name)}`);
      }
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

      if (this.logger) {
        this.logger.write(`${amount} credited to ${trimName(name)}`);
      }
    }
  }
  debit(name, amount) {
    if (this[findAccount](name)) {
      accounts.forEach(acc => {
        acc.monies = acc.monies - amount;
      });
    }

    if (this.logger) {
      this.logger.write(`${amount} debited from ${trimName(name)}`);
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