/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  // var left_depth = maxDepth(root.left);
  // var right_depth = maxDepth(root.right);

  // return Math.max(left_depth, right_depth) + 1;

  var max_depth = Number.MIN_VALUE;

  if (root.left !== null) {
    max_depth = Math.max(maxDepth(root.left), max_depth);
  }

  if (root.right !== null) {
    max_depth = Math.max(maxDepth(root.right), max_depth);
  }

  return max_depth + 1;
};
// @lc code=end
