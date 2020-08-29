/*
 * @Author: your name
 * @Date: 2020-08-29 10:58:16
 * @LastEditTime: 2020-08-29 10:59:04
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树，判断它是否是高度平衡的二叉树。
                 本题中，一棵高度平衡二叉树定义为：
                 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1
 * @FilePath: \LeetCode\LeetCode\LC110_平衡二叉树.js
 */

var isBalanced = function(root) {
    return getHeight(root) >= 0
    function getHeight(root) {
        if (root == null) return 0
        let lh = getHeight(root.left), rh = getHeight(root.right)
        if (lh >= 0 && rh >= 0 && Math.abs(lh - rh) <= 1) {
            return Math.max(lh, rh) + 1
        } else {
            return -1
        }
    }
};