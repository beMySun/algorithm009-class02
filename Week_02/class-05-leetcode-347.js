/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 解法: 优先队列， 大顶堆
var topKFrequent = function (nums, k) {
  var map = new Map();
  var list = [];
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let count = map.get(nums[i]);
      map.set(nums[i], count + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map.entries()) {
    list.push({ value, key });
  }

  // 降序排列
  list.sort((a, b) => b.value - a.value);

  for (let i = 0; i < k; i++) {
    result.push(parseInt(list[i].key, 10));
  }

  return result;
};
// @lc code=end
