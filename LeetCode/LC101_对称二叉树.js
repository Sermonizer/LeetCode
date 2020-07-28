/*
 * @Author: your name
 * @Date: 2020-07-08 11:15:37
 * @LastEditTime: 2020-07-08 11:19:56
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树，检查它是否是镜像对称的。
 * @思路： 当根节点是null，肯定是镜像对称；
 *        当根节点不为null，有以下一些情况：
 *              1. 没有孩子节点，也是镜像对称
 *              2. 有一个孩子，不是
 *              3. 有两个孩子，要判断：
 *                  3.1 孩子val不相等，不对称
 *                  3.2 孩子val相等，对称的情形只有：
 *                      left.left = right.right, left.right = right.left
 * @FilePath: \Algorithm\LC101_对称二叉树.js
 */

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
var isSymmetric = function (root) {
  if (root == null) return true;
  return res(root.left, root.right);

  function res(left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val == right.val) {
      return res(left.left, right.right) && res(left.right, right.left);
    }
    return false;
  }
};
