/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  var stack = [];

  function helper(node) {
    if(!node) return;

    node.left && helper(node.left);
    stack.push(node.val);
    node.right && helper(node.right);
  }

  helper(root);

  return stack;
};
// @lc code=end

