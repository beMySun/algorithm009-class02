/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 1:
var twoSum = function (nums, target) {
  for (var i = 1; i < nums.length; i++) {
    var idx = nums.indexOf(target - nums[i]);
    if (idx > -1 && idx !== i) {
      return [i, idx];
    }
  }
  return [];
};

//  solution 2:
var twoSum = function (nums, target) {
  var dic = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (complement in dic) {
      return [dic[complement], i];
    }
    dic[nums[i]] = i;
  }
};
// @lc code=end
