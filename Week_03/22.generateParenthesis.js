/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/** 
 * O(2^n)
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var path = '';
  var result = [];
  _generate(0, 0, n, path);

  return result;

  function _generate(left, right, n, path) {
    // terminator
    if(left == n && right == n) {
      result.push(path);
      return;
    }
    // process

    // drill down
    if(left < n) {
      _generate(left + 1, right,  n, path + '(');

    }

    if(left > right) {
      _generate(left, right + 1, n, path + ')');
    }
    
    // reverse state
    // ...
  }
};

// @lc code=end
