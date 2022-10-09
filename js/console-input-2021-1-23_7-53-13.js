/**
 * @param {number[]} arr
 * @return {boolean}
 */

var validMountainArray = (arr) => {
  const length = arr.length;

  if (length < 3) return false;

  const initialElement = arr?.[0];

  const largestNoDetails = arr.reduce(
    (largestDetails, currentNumber, currentIndex) => {
      if (currentNumber <= largestDetails.largestNumber) {
        return largestDetails;
      }
      return { largestNumber: currentNumber, index: currentIndex };
    },
    {
      largestNumber: initialElement,
      index: 0,
    },
  );

  const { largestNumber, index: largetNumberIndex } = largestNoDetails;

  const beforeLargestNumber = arr.slice(0, largetNumberIndex);
  const afterLargestNumber = arr.slice(largetNumberIndex + 1, length);

  if (!beforeLargestNumber.length || !afterLargestNumber.length) return false;
  const setOfBeforeValues = new Set(beforeLargestNumber);
  const setOfAfterValues = new Set(afterLargestNumber);

  if (
    setOfBeforeValues.has(largestNumber) ||
    setOfAfterValues.has(largestNumber)
  ) {
    return false;
  }

  const notInShapeBefore = beforeLargestNumber.some((value, i) => {
    return value <= beforeLargestNumber[i - 1] ?? 0;
  });

  if (notInShapeBefore) {
    return false;
  }

  const afterNotInShape = afterLargestNumber?.some((value, i) => {
    return value <= afterLargestNumber[i + 1] ?? 0;
  });

  if (afterNotInShape) {
    return false;
  }

  return true;
};

// console.log(validMountainArray([1, 1, 1, 1, 1, 1, 1, 2, 1]));

// Better solution

const validMountainArray1 = function (A) {
  let n = A.length;
  if (n <= 2) return false;
  if (A[0] >= A[1] || A[n - 2] <= A[n - 1]) return false;
  let up = true;
  for (let i = 1; i < n; i++) {
    if (up) {
      if (A[i] < A[i - 1]) up = false;
      else if (A[i] === A[i - 1]) return false;
    } else {
      if (A[i] >= A[i - 1]) return false;
    }
  }
  return true;
};

console.log(validMountainArray([2, 1, 3, 4, 5, 4, 3, 2, 1]));
