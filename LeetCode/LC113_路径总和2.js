/*
 * @Author: your name
 * @Date: 2020-08-03 09:28:39
 * @LastEditTime: 2020-08-12 10:47:56
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
                 说明: 叶子节点是指没有子节点的节点。
 * @FilePath: \LeetCode\LeetCode\LC113_路径总和2.js
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function Sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 非递归
var pathSum1 = function (root, sum) {
  if (root == null) {
    return [];
  }

  let stack = [[[root.val], root]],
    res = [];
    
  while (stack.length !== 0) {
    let [tmp, node] = stack.pop();
    if (node.left == null && node.right == null && Sum(tmp) == sum) {
      res.push(tmp);
    }
    if (node.right) {
      stack.push([tmp.concat([node.right.val]), node.right]);
    }
    if (node.left) {
      stack.push([tmp.concat([node.left.val]), node.left]);
    }
  }
  return res;
};

// 递归
var pathSum2 = function (root, sum) {
  let res = [];
  digui(root, [], sum);
  return res;

  function digui(root, tmp, sum) {
    if (root == null) {
      return;
    }
    if (root.left == null && root.right == null && sum - root.val == 0) {
      tmp = tmp.concat([root.val]);
      res.push(tmp);
    }
    digui(root.left, tmp.concat([root.val]), sum - root.val);
    digui(root.right, tmp.concat([root.val]), sum - root.val);
  }
};

let a1 = new TreeNode(5),
  a2 = new TreeNode(4),
  a3 = new TreeNode(8),
  a4 = new TreeNode(11),
  a5 = new TreeNode(13),
  a6 = new TreeNode(4),
  a7 = new TreeNode(7),
  a8 = new TreeNode(2),
  a9 = new TreeNode(5),
  a10 = new TreeNode(1);

(a1.left = a2), (a1.right = a3);
a2.left = a4;
(a3.left = a5), (a3.right = a6);
(a4.left = a7), (a4.right = a8);
(a6.left = a9), (a6.right = a10);

console.log(pathSum(a1, 22));
