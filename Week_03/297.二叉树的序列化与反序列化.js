/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  var result = '';

  function helper(node) {
    if (!node) {
      result += 'null,';
    } else {
      result += node.val + ',';
      helper(node.left);
      helper(node.right);
    }
  }

  helper(root);

  return '[' + result.substring(0, result.length - 1) + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.substring(1, data.length - 1).split(',');

  const tree = buildTree();

  return tree;

  function buildTree() {
    const nodeVal = nodes.shift();

    if (nodeVal === 'null') {
      return null;
    } else {
      const node = new TreeNode(Number(nodeVal));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
