/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];
  var subResult = [];

  function combineSub(start, subResult) {
    
    if (subResult.length === k) {
      result.push(subResult.slice(0));
    }

    for (var i = start; i <= n; i++) {
      subResult.push(i);
      combineSub(i+1, subResult);
      subResult.pop();
    }
  }

  combineSub(1, subResult);

  return result;
};
// @lc code=end

