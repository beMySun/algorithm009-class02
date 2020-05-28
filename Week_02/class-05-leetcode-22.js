/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// solution: 回溯 + 剪枝
var generateParenthesis = function (n) {
  var res = [];
  var initialPath = '';
  dfs(res, n, n, initialPath);
  return res;

  function dfs(res, left, right, path) {
    if (left === 0 && right === 0) {
      res.push(path);
      return;
    }

    if (left > 0) {
      dfs(res, left - 1, right, path + '(');
    }

    if (left < right) {
      dfs(res, left, right - 1, path + ')');
    }
  }
};