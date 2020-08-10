/*
 * @Author: your name
 * @Date: 2020-07-03 10:31:35
 * @LastEditTime: 2020-08-10 10:39:50
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树，找出其最大深度。
                 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * @FilePath: \Algorithm\104二叉树的最大深度.js
 */ 


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// BFS
var maxDepth = function(root) {
    if (root == null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// 层次遍历也可以，不做过多说明