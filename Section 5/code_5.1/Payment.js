// Context
class Payment {
  pay(processor) {
    return processor.pay();
  }
  refund(processor) {
    return processor.refund();
  }
}

module.exports = Payment;
