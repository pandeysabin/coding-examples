//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  const { length: lengthOfArray } = nums;
  let lengthOfZeroes = 0;
  let lengthOfNonZeroes = 0;
  for (let index = 0; index < nums.length; index++) {
    if (lengthOfNonZeroes + lengthOfZeroes === lengthOfArray) {
      return;
    }
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
      lengthOfZeroes += 1;
      index -= 1;
    } else {
      lengthOfNonZeroes += 1;
    }
  }
};

console.log(moveZeroes([0, 0, 1]));
