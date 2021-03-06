/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) return 0;

  if (root.left == null && root.right == null) return 1;

  var min_depth = Number.MAX_VALUE;

  if (root.left != null) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  if (root.right != null) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }

  return min_depth + 1;
};
// @lc code=end
