/*
 * @Author: your name
 * @Date: 2020-06-22 15:58:55
 * @LastEditTime: 2020-06-22 16:32:08
 * @LastEditors: Please set LastEditors
 * @Description: 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
 *               路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * @FilePath: \Algorithm\二叉树中和为某一值的路径.js
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

let list = [],
  listAll = [];
function FindPath(root, expectNumber) {
  // write code here
  if (root === null) return listAll;
  list.push(root.val);
  expectNumber -= root.val;
  if (expectNumber === 0 && root.left === null && root.right === null) {
    listAll.push([...list]);
  }
  FindPath(root.left, expectNumber);
  FindPath(root.right, expectNumber);
  list.pop(list.length - 1);
  return listAll;
}

// {10,5,12,4,7},22
let a = new TreeNode(10);
(a.left = new TreeNode(5)),
  (a.right = new TreeNode(12)),
  (a.left.left = new TreeNode(4)),
  (a.left.right = new TreeNode(7)),
  console.log(FindPath(a, 15));
