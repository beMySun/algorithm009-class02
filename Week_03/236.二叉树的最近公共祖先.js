/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ancestor;

  function dfs(root, p, q) {
    if (root === null) return false;

    const leftSon = dfs(root.left, p, q);
    const rightSon = dfs(root.right, p, q);

    if ((leftSon && rightSon) || ((root.val === p.val || root.val === q.val) && (leftSon || rightSon))) {
      ancestor = root;
    }

    return leftSon || rightSon || root.val === p.val || root.val === q.val;
  }

  dfs(root, p, q);

  return ancestor;
};
// @lc code=end
