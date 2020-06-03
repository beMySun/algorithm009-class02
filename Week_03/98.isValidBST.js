/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
// solution inorder traverse
var isValidBST = function (root) {
  var result = [];

  dfs(root);

  function dfs(node) {
    if (!node) return;

    node.left && dfs(node.left);
    node && result.push(node.val);
    node.right && dfs(node.right);
  }

  for (var i = 0; i < result.length - 1; i++) {
    if (result[i] >= result[i + 1]) {
      return false;
    }
  }

  return true;
};
// @lc code=end
