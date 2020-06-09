/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  var res = [];

  function helper(node, level, arr) {
    if (!node) return;

    if (!arr[level]) arr[level] = [];
    arr[level].push(node.val);

    helper(node.left, level + 1, arr);
    helper(node.right, level + 1, arr);
  }

  helper(root, 0, res);

  return res;
};
// @lc code=end

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [],
    queue = [root];

  while (queue.length) {
    let currentLevel = [];
    let levelSize = queue.length;

    while (levelSize !== 0) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      levelSize--;
    }

    result.push(currentLevel);
  }

  return result;
};
