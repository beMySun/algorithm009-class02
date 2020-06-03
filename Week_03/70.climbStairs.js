/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

/**
 * @param {number} n
 * @return {number}
 */
// @lc code=start
// solution 1: 
var climbStairs = function(n) {
  if(n <= 2) return n;

  var f1 = 1;
  var f2 = 2;
  var f3 = 3;

  for(var i = 3; i < n + 1; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
 
};
// @lc code=end
