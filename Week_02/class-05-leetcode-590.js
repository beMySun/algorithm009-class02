/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  var stack = [];
  if (!root) return [];
  helper(root, stack);
  return stack;

  function helper(node, stack) {
    if (!node) return;
    for (var i = 0; i < node.children.length; i++) {
      helper(node.children[i], stack);
    }
    stack.push(node.val);
  }
};
// @lc code=end
