/*
 * @Author: your name
 * @Date: 2020-07-03 09:48:34
 * @LastEditTime: 2020-08-16 20:06:49
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

// 递归
function sumNumbers1(root) {
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


// 迭代
var sumNumbers2 = function(root) {
    let res = [], queue = [], sum = 0
    if (root == null) return null
    queue.push([root, [root.val]])
    while(queue.length !== 0) {
        let [node, temp] = queue.pop()
        if (node.left == null && node.right == null) {
            res.push(temp)
        }
        if (node.left) {
            queue.push([node.left, temp.concat([node.left.val])])
        }
        if (node.right) {
            queue.push([node.right, temp.concat([node.right.val])])
        }
    }
    for (let i = 0; i < res.length; i++) {
        let num = +res[i].join('')
        sum += num
    }
    return sum
};


let a = new TreeNode(1)
let b = new TreeNode(2)
let c = new TreeNode(3)
