const Phone = require('./Phone');

class iPhoneXS {
  constructor(serialNum) {
    return new Phone(serialNum, 'iPhone Xs', 'A12 Bionic', '4 Gb', 70.9, 143.6, 7.7, '1125 x 2436');
  }
}

module.exports = iPhoneXS;