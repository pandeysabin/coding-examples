// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */

const replaceElements = function (arr) {
  const length = arr.length;
  let largestNoToTheRight = arr[length - 1];

  for (let index = length - 1; index >= 0; index--) {
    if (index === length - 1) {
      arr[index] = -1;
    } else if (largestNoToTheRight < arr[index]) {
      arr[index] = arr[index] - largestNoToTheRight;
      largestNoToTheRight = arr[index] + largestNoToTheRight;
      arr[index] = largestNoToTheRight - arr[index];
    } else {
      arr[index] = largestNoToTheRight;
    }
  }

  return arr;
};

replaceElements([]);
