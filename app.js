'use strict';
function sumAndMultiply(a, b, c) { //eslint-disable-line
  let expectedSum = sum(sum(a, b)[0], c)[0];
  let sumMessage = a + ' and ' + b + ' and ' + c + ' sum to ' + expectedSum + '.';
  let expectedProduct = multiply(multiply(a, b)[0], c)[0];
  let productMessage = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + expectedProduct + '.';
  return [expectedSum, expectedProduct, sumMessage, productMessage];
};





