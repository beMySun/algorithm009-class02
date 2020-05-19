/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var validNumberCount = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[validNumberCount] = nums[i];
      validNumberCount++;
    }
  }

  for (var j = validNumberCount; j < nums.length; j++) {
    nums[j] = 0;
  }

  return nums;
};
