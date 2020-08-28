/*
 * @Author: your name
 * @Date: 2020-08-22 11:32:17
 * @LastEditTime: 2020-08-28 15:16:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test.js
 */

/**
 * 第一题
 */

// 定义树
function treeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function getSum(root, sum) {
  if (root == null) return false;
  let queue = [];
  queue.push([root, root.val]);
  while (queue.length > 0) {
    let [node, val] = queue.shift();
    if (val == sum && node.left == null && node.right == null) {
      return true;
    }
    if (node.left) {
      queue.push([node.left, val + node.left.val]);
    }
    if (node.right) {
      queue.push([node.right, val + node.right.val]);
    }
  }
  return false;
}


/**
 * 第二题 
 * 注：题目有点问题，[1,2,3,3]最多能偷到5
 */

// 动态规划简化
 function maxMoney(arr) {
     let pre = 0, curr = 0
     for (let i of arr) {
         let res = Math.max(curr, pre + i)
         pre = curr
         curr = res
     }
     return curr
 }

 console.log(maxMoney([1,2,3,3])); //12

 function likeNum(n) {
   let num = [2, 3, 5]
   for  (let i = 3; i < n; i++) {
     if (i % 3 == 0) {
       num[i] = num[Math.floor(i / 3) - 1] * 10 + 2
     } else if (i % 3 == 1) {
      num[i] = num[Math.floor(i / 3) - 1] * 10 + 3
     } else {
      num[i] = num[Math.floor(i / 3) - 1] * 10 + 5
     }
   }
   return num[n-1]
 }

 console.log(likeNum(3));
 console.log('%s', "value")