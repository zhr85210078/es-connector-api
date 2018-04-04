var crypto = require('crypto');

function ccip (pwd, cont) {
  var cipher = crypto.createCipher('aes192', pwd);
  var encrypted = cipher.update(cont, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
exports.ccip = ccip;

function decip (pwd, cont) {
  var decipher = crypto.createDecipher('aes192', pwd);
  var decrypted = decipher.update(cont, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
exports.decip = decip;

function chash (pwd) {
  var hash = crypto.createHash('sha256');
  hash.update('asd');
  return hash.digest('hex');
}
exports.chash = chash;
