/*
 * @Author: your name
 * @Date: 2020-08-12 09:47:42
 * @LastEditTime: 2020-08-12 10:02:52
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，
 *               这条路径上所有节点值相加等于目标和。
 * @FilePath: \LeetCode\LeetCode\LC112_路径总和.js
 */

// 1. DFS
var hasPathSum = function(root, sum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return sum - root.val == 0
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

// 2. BFS
var hasPathSum = function(root, sum) {
    if (root == null) return false
    let queue = []
    queue.push([root, root.val])
    while (queue.length > 0) {
        let [node, val] = queue.shift()
        if (val == sum && node.left == null && node.right == null) {
            return true
        }
       if (node.left) {
           queue.push([node.left, val + node.left.val])
       }
       if (node.right) {
           queue.push([node.right, val + node.right.val])
       }
    }
    return false
};