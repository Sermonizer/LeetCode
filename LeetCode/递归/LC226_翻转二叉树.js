/*
 * @Author: your name
 * @Date: 2020-07-08 10:08:58
 * @LastEditTime: 2020-07-08 10:16:05
 * @LastEditors: Please set LastEditors
 * @Description: 翻转一棵二叉树。
 * @FilePath: \Algorithm\LC226_翻转二叉树.js
 */ 

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// 利用前序遍历
var invertTree = function(root) {
    if (root == null)  {
        return null;
    }
    let rightTree = new TreeNode()
    rightTree = root.right
    root.right = invertTree(root.left)
    root.left = invertTree(rightTree)
    return root
};

// 利用中序遍历
var invertTree = function(root) {
    if (root == null) return null;
    invertTree(root.left); // 递归找到左节点
    let rightTree = new TreeNode()
    rightTree = root.right; // 保存右节点
    root.right = root.left;
    root.left = rightNode;
    // 递归找到右节点 继续交换 : 因为此时左右节点已经交换了,所以此时的右节点为root.left
    invertTree(root.left); 
}

// 利用后序遍历
var invertTree = function(root) {
    // 后序遍历-- 从下向上交换
    if (root == null) return null;
    let leftNode = new TreeNode(), rightNode = new TreeNode()
    leftNode = invertTree(root.left);
    rightNode = invertTree(root.right);
    root.right = leftNode;
    root.left = rightNode;
    return root;
}


// 利用层次遍历
var invertTree = function(root) {
    // 层次遍历--直接左右交换即可
    if (root == null) return null;
    let queue = []
    queue.push(root);
    while (!queue.isEmpty()) {
        let node = new TreeNode(), rightTree = new TreeNode()
        node = queue.pop()
        rightTree = node.right;
        node.right = node.left;
        node.left = rightTree;
        if (node.left != null){
            queue.push(node.left);
        }
        if (node.right != null){
            queue.push(node.right);
        }
    }
    return root;
}