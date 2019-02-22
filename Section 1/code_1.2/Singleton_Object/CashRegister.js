let cash = 0; // This is a private variable

const CashRegister = {
  credit(amount) {
    cash = cash + amount;
    return cash;
  },
  debit(amount) {
    if (amount <= cash) {
      cash = cash - amount;
      return true;
    } else {
      return false;
    }
  },
  total() {
    return cash;
  }
}

module.exports = CashRegister;