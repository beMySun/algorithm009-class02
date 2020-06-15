/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS
var largestValues = function (root) {
  if (!root) return [];

  var result = [];
  var queue = [root];

  while (queue.length) {
    var len = queue.length;
    var currentMax = -Infinity;
    while (len--) {
      var node = queue.shift();
      currentMax = Math.max(currentMax, node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(currentMax);
  }

  return result;
};

// DFS
var largestValues = function (root) {
  if (!root) return [];
  var result = [];

  function helper(node, result, level) {
    if (!node) return;
    if (result[level] == null || result[level] < node.val) {
      result[level] = node.val;
    }
    node.left && helper(node.left, result, level + 1);
    node.right && helper(node.right, result, level + 1);
  }

  helper(root, result, 0);

  return result;
};
// @lc code=end

