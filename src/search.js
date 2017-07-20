const passwordsArray = require('./passwords.js');
const fs = require('fs');

let top100kArray = [];

const loadArray = () => {
  top100kArray = fs.readFileSync(`${__dirname}/top1000Passwords.txt`, 'utf8').split('\n');
};

const passwordFilter = (array, input) => {
  const newPasswords = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].slice(0, input.length) === input) {
      newPasswords.push(array[i]);
    }
    if (newPasswords.length >= 5) {
      break;
    }
  }
  return newPasswords.join(',');
};

const getPasswords = input => passwordFilter(top100kArray, input);

module.exports = {
  getPasswords,
  passwordFilter,
  loadArray,
};
