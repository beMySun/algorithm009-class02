/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// solution 1: 暴力, 每次移动一个
var rotate = function (nums, k) {
  let previous;
  for (var i = 0; i < k; i++) {
    previous = nums[nums.length - 1];
    for (var j = 0; j < nums.length; j++) {
      [previous, nums[j]] = [nums[j], previous];
    }
  }
};
