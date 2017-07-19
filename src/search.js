const passwordsArray = require('./passwords.js');

const passwordFilter = (array, input) => {
  const newPasswords = array.filter(passwordString =>
    passwordString.slice(0, input.length) === input);
  return newPasswords.join(',');
};
const getPasswords = input => passwordFilter(passwordsArray, input);


module.exports = {
  getPasswords,
  passwordFilter,
};
