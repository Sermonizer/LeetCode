/*
 * @Author: your name
 * @Date: 2020-08-09 10:32:26
 * @LastEditTime: 2020-08-09 10:35:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC145_二叉树的后序遍历.js
 */

// 方法1：栈迭代
var postorderTraversal1 = function(root) {
    let res = [], stack = [root]
    while (stack.length) {
        let node = stack.pop()
        if (node == null) continue
        if (node instanceof TreeNode) {
            stack.push(node.val)
            stack.push(node.right)
            stack.push(node.left)
        } else {
            res.push(node)
        }
    }
    return res
};

// 方法2：递归
var postorderTraversal2 = function(root) {
    let res = []
    dfs(root)
    return res
    function dfs(root) {
        if (!root) return
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
};