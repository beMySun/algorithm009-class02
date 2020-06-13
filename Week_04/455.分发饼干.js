/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var count = 0;

  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  var i = 0;
  var j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};
// @lc code=end
