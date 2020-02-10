/**
 * Attempt 1: 19:23 Minutes
 */
const array = [1, 3, 5, 6, 4, 2];
function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumFor(array));

function sumWhile(arr) {
  let sum = 0;
  let counter = 0;
  while (counter < arr.length) {
    sum += arr[counter];
    counter++;
  }
  return sum;
}
console.log(sumWhile(array));

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}
console.log(sumRecursion(array));

function sumTheSimplyWay(arr) {
  return _.reduce(arr, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimplyWay(array));
