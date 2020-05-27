/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var initialLevel = 0;
  var stack = [];

  if (!root) return [];
  helper(root, initialLevel);
  return stack;

  function helper(node, level) {
    if (stack.length === level) {
      stack.push([]);
    }
    stack[level].push(node.val);
    for (var i = 0; i < node.children.length; i++) {
      helper(node.children[i], level + 1);
    }
  }
};
// @lc code=end
