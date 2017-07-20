const passwordsArray = require('./passwords.js');
const fs = require('fs');

let top1000Array = [];

const loadArray = () => {
  fs.readFile(`${__dirname}/top1000Passwords.txt`, 'utf8', (error, data) => {
    if (error) {
      console.log('loadArray error');
    } else {
      top1000Array = data.split('\n');
    }
  });
};

const passwordFilter = (array, input) => {
  const newPasswords = array.filter(passwordString =>
    passwordString.slice(0, input.length) === input);
  return newPasswords.join(',');
};

const getPasswords = input => passwordFilter(passwordsArray, input);


module.exports = {
  getPasswords,
  passwordFilter,
  loadArray,
};
