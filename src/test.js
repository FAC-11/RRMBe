// test the search;
// reference link:
// https://github.com/foundersandcoders/modules-challenge/blob/solutions/test/test.js

const test = require('tape');
const search = require('./search');
// const passwords = require('./passwords');

test('newPasswords test', function (t) {
  const array = ['qwerty', 'yes', 'no', 'maybe', 'i dont know'];
  const actual = search(array, 'q');
  const expected = ['qwerty'];
  t.deepEqual(actual, expected, 'newPasswords test should return array of strings which match filter');
  t.end();
});
