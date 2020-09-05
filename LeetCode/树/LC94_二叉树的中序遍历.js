/*
 * @Author: your name
 * @Date: 2020-07-03 09:11:36
 * @LastEditTime: 2020-09-03 12:01:15
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树，返回它的中序遍历。
 *               输入: [1,null,2,3], 输出: [1,3,2]
 * @FilePath: \Algorithm\二叉树的中序遍历.js
 */ 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 /**
  * 
  * @param {*} root 
  * 方法一：
  *     用栈保存节点，当访问过时，将节点的值放入栈中。判断是否访问过，
  *     就用节点 instanceof TreeNode 的方法 
  */
var inorderTraversal1 = function(root) {
    let res = [], stack = [root]
    while (stack.length) {
        let node = stack.pop()
        if (node == null) continue
        if (node instanceof TreeNode) {
            // 因为是中序遍历，后push的先pop
            stack.push(node.right)
            stack.push(node.val)
            stack.push(node.left)
        } else {
            res.push(node)
        }
    }
    return res
};

// 法2：递归
var inorderTraversal2 = function(root) {
    let res = []
    digui(root)
    return res
    function digui(root) {
        if (root == null) return res
        digui(root.left)
        res.push(root.val)
        digui(root.right)
    }
};

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)

a1.right = a2
a2.left = a3

console.log(inorderTraversal2(a1));
