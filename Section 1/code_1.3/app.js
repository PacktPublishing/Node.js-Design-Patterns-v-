const iPhoneFactory = require('./iPhoneFactory');

const iPhoneXR = iPhoneFactory.create('iPhone Xr', 'xr-0001');
const iPhoneXS = iPhoneFactory.create('iPhone Xs', 'xs-0002');
const iPhoneXSMax = iPhoneFactory.create('iPhone Xs Max', 'xsmax-0003');

iPhoneXR.displayConfig();
iPhoneXS.displayConfig();
iPhoneXSMax.displayConfig();