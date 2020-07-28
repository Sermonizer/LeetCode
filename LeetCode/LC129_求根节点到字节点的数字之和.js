/*
 * @Author: your name
 * @Date: 2020-07-03 09:48:34
 * @LastEditTime: 2020-07-03 10:20:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\求根节点到字节点的数字之和.js
 */ 

/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function sumNumbers(root) {
    
    return dfs(root, 0)
    function dfs(node, sum) {
        if (node == null) return 0
        let temp = sum * 10 + node.val
        if (node.left == null && node.right == null) {
            return temp
        }
        return dfs(node.left, temp) + dfs(node.right, temp)
    }
};

let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)

a.left = b
a.right = c

console.log(sumNumbers(a));
