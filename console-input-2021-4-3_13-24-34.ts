// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

const thirdMax = function (nums: number[]): number {
  if (nums.length < 3) return Math.max(...nums);
  const set = new Set(nums);
  if (set.size < 3) return Math.max(...set);

  for (let i = 0; i < 2; i++) {
    set.delete(Math.max(...set));
  }
  return Math.max(...set);
};

thirdMax([3, 2, 1]);
