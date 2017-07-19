const passwords = require('./passwords.js');

const passwordFilter = (array, input) => {
  const newPasswords = array.filter(passwordString =>
    passwordString.slice(0, input.length) === input);
  return newPasswords.join(',');
};
module.exports = passwordFilter;
