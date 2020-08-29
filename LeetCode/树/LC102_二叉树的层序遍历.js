/*
 * @Author: your name
 * @Date: 2020-07-05 10:55:31
 * @LastEditTime: 2020-08-10 10:12:18
 * @LastEditors: Please set LastEditors
 * @Description: 给你一个二叉树，请你返回其按 层序遍历 得到的节点值（即逐层地，从左到右访问所有节点）
 * 
 * @思路：跟LC104的思路一样，利用BFS来进行遍历(BFS的经典实现)
 * @FilePath: \Algorithm\LC102_二叉树的层序遍历.js
 */ 
var levelOrder = function(root) {
    if (root == null) return []
    let queue = [], res = []
    queue.push(root)
    while (queue.length !== 0) {
        let len = queue.length, 
            temp = new TreeNode(),
            list = []
        for (let i = 0; i < len; i++) {
            temp = queue.pop()
            list.push(temp.val)
            if (temp.left !== null) {
                queue.unshift(temp.left)
            }
            if (temp.right !== null) {
                queue.unshift(temp.right)
            }
        }
        res.push(list)
    }
    return res
};

// 前序遍历，每遍历深一层，depth+1
var levelOrder = function(root) {
    let res = []
    preOrder(root, 0, res)
    return res
    function preOrder(root, depth, res) {
        if (root == null) return
        if (depth >= res.length) {
            res.push([])
        }
        res[depth].push(root.val)
        preOrder(root.left, depth+1, res)
        preOrder(root.right, depth+1, res)
    }
};