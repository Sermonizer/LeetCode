/*
 * @Author: your name
 * @Date: 2020-06-16 09:54:04
 * @LastEditTime: 2020-06-16 10:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\从上往下打印二叉树.js
 */ 
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function PrintFromTopToBottom(root)
{
    // write code here
    let stack = [], queue = []
    if (root === null) return stack
    queue.push(root)
    while (queue.length !== 0) {
        let temp = queue.shift()
        if (temp.left) queue.push(temp.left)
        if (temp.right) queue.push(temp.right)
        stack.push(temp.val)
    }
    return stack
}

// 10 6 14 4 8 12 16
let root = new TreeNode(10)
root.left = new TreeNode(6)
root.right = new TreeNode(14)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(8)
root.right.left = new TreeNode(12)
root.right.right = new TreeNode(16)

console.log(PrintFromTopToBottom(root));

