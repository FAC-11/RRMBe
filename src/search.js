const passwords = require('./passwords.js');

const passwordFilter = function (array, input) {
  const newPasswords = array.filter(
    function(passwordString) {
      return passwordString.slice(0, input.length) === input;
    });
  return newPasswords;
};
module.exports = passwordFilter;
