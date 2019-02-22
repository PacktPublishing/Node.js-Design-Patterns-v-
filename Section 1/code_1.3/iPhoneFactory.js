const iPhoneXR = require('./iPhoneXR');
const iPhoneXS = require('./iPhoneXS');
const iPhoneXSMax = require('./iPhoneXSMax');

class iPhoneFactory {
  create(type, serialNum) {
    switch (type) {
      case 'iPhone Xr':
        return new iPhoneXR(serialNum);
      case 'iPhone Xs':
        return new iPhoneXS(serialNum);
      case 'iPhone Xs Max':
        return new iPhoneXSMax(serialNum);
      default:
        {
          console.log('Unknown iPhone type...');
        }
    }
  }
}

module.exports = new iPhoneFactory();