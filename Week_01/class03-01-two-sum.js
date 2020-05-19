/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 1; i < nums.length; i++) {
    const idx = nums.indexOf(target - nums[i]);
    if (idx > -1 && idx !== i) {
      return [i, idx];
    }
  }
  return [];
};
