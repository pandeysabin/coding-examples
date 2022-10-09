// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

/**
 * @param {number[]} A
 * @return {number[]}
 */

/**
 *
 * @param {number} firstItem
 * @param {number} secondItem
 * @return {number} -1, 0 or 1
 */

const isEven = (number) => {
  return number % 2 === 0;
};

const sortArray = (firstItem, secondItem) => {
  if (isEven(firstItem)) {
    return -1;
  }

  if (isEven(secondItem)) return 1;

  return 0;
};

var sortArrayByParity = function (A) {
  A.sort(sortArray);
  return A;
};

sortArrayByParity([3, 1, 2, 4]);
