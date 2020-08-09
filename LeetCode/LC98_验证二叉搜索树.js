/*
 * @Author: your name
 * @Date: 2020-08-09 10:57:46
 * @LastEditTime: 2020-08-09 11:19:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC98_验证二叉搜索树.js
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 思路1：中序遍历时，判断当前节点是否大于中序遍历的前一个节点，
// 如果大于，说明满足 BST，继续遍历；否则直接返回 false。
let pre = -Infinity
var isValidBST1 = function (root) {
    if (!root) return true
    if (!isValidBST(root.left)) {
        return false
    }
    if (root.val <= pre) {
        return false
    }
    pre = root.val
    return isValidBST1(root.right)
};


var isValidBST = function (root) {
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node == null) continue;
    if (node instanceof TreeNode) {
      let left = node.left,
        right = node.right;
      stack.push(left);
      stack.push(right);
      if ((left && left.val >= node.val) || (right && right.val <= node.val)) {
          return false
      }
    }
  }
  return true
};

let a1 = new TreeNode(0)
let a2 = new TreeNode(5)
let a3 = new TreeNode(15)
let a4 = new TreeNode(6)
let a5 = new TreeNode(20)

// a1.left = a2
// a1.right = a3
// a3.left = a4
// a3.right = a5

console.log(isValidBST(a1));
