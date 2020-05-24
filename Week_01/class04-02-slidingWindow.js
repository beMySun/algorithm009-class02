/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 解法1: 暴力
var maxSlidingWindow = function (nums, k) {
  var length = nums.length;
  if (!length) return [];

  var res = [];
  for (var i = 0; i < length - (k - 1); i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    res.push(max);
  }
  return res;
};
// @lc code=end
