/*
 * @Author: your name
 * @Date: 2020-07-03 09:11:36
 * @LastEditTime: 2020-07-08 11:00:32
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树，返回它的中序遍历。
 *               输入: [1,null,2,3], 输出: [1,3,2]
 * @FilePath: \Algorithm\二叉树的中序遍历.js
 */ 

 /**
  * 
  * @param {*} root 
  * 方法一：
  *     用栈保存节点，当访问过时，将节点的值放入栈中。判断是否访问过，就用
  *     节点 instanceof TreeNode 的方法 
  */
var inorderTraversal = function(root) {
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