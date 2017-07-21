// test the search;
// reference link:
// https://github.com/foundersandcoders/modules-challenge/blob/solutions/test/test.js

const test = require('tape');
const search = require('./search').passwordFilter;
const passwords = require('./passwords');

test('passwordFilter test', function (t) {
  const array = ['qwerty', 'yes', 'no', 'maybe', 'i dont know', 'queen'];
  let actual = search(array, 'q');
  let expected = 'qwerty,queen';
  t.deepEqual(actual, expected, 'passwordFilter test should return a string which matches filter');
  actual = search(passwords, '12345');
  expected = '123456,12345678,123456789,12345,1234567';
  t.deepEqual(actual, expected, 'passwordFilter test should give the first 5 matching strings');
  t.end();
});
