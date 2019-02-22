const Phone = require('./Phone');

class iPhoneXSMax {
  constructor(serialNum) {
    return new Phone(serialNum, 'iPhone Xs Max', 'A12 Bionic', '4 Gb', 77.4, 157.5, 7.9, '1242 x 2688');
  }
}

module.exports = iPhoneXSMax;