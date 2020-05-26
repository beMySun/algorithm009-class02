/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  var stack = [];
  if (!root) return [];
  helper(root, stack);
  return stack;

  function helper(node, stack) {
    if (!node) return;
    stack.push(node.val);
    for (var i = 0; i < node.children.length; i++) {
      helper(node.children[i], stack);
    }
  }
};
// @lc code=end
