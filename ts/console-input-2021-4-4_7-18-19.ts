// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

function findDisappearedNumbers(nums: number[]): number[] {
  const lengthOfTheArray = nums.length;

  const nonExistenceNumbers: number[] = [];

  const setOfUniqueNumbers = new Set(nums);

  for (let i = 0; i < lengthOfTheArray; i++) {
    if (!setOfUniqueNumbers.has(i + 1)) {
      nonExistenceNumbers.push(i + 1);
    }
  }

  return nonExistenceNumbers;
}
