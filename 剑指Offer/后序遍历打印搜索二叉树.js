/*
 * @Author: your name
 * @Date: 2020-07-24 10:49:32
 * @LastEditTime: 2020-07-24 11:24:40
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个后序遍历搜索二叉树的数组，打印头节点
 * @FilePath: \Algorithm\后序遍历打印搜索二叉树.js
 */

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function search1(posArr) {
  return process1(posArr, 0, posArr.length - 1);

  // 递归调用：用L-R的所有值来建树，最后返回头节点
  function process(arr, L, R) {
    // 如果L > R 说明无法建树，返回空
    if (L > R) return null;
    // 如果 L <= R，说明起码数组不为空，里面有节点，头节点就是数组最后一个
    let Head = new TreeNode(arr[R]);
    // 如果L == R，说明只有一个节点，没有子节点，直接返回头节点即可
    if (L == R) {
      return Head;
    }
    // L < R时，说明有子节点，继续
    // M：找到最后一次比R小的位置
    let M = L - 1;
    for (let i = L; i < R; i++) {
      if (arr[i] < arr[R]) {
        M = i;
      }
    }
    Head.left = process(posArr, L, M);
    Head.right = process(posArr, M + 1, R - 1);
    return Head;
  }
}

/**
 * 进阶代码: 用二分搜索替代for循环
 * @param {*} posArr
 */
function search2(posArr) {
  return process2(posArr, 0, posArr.length - 1);

  // 递归调用：用L-R的所有值来建树，最后返回头节点
  function process2(arr, L, R) {
    // 如果L > R 说明无法建树，返回空
    if (L > R) return null;
    // 如果 L <= R，说明起码数组不为空，里面有节点，头节点就是数组最后一个
    let Head = new TreeNode(arr[R]);
    // 如果L == R，说明只有一个节点，没有子节点，直接返回头节点即可
    if (L == R) {
      return Head;
    }
    // L < R时，说明有子节点，继续
    // M：找到最后一次比R小的位置
    let M = L - 1,
      left = L,
      right = R - 1;
    while (left <= right) {
      let mid = left + ((right - left) >> 1);
      if (arr[mid] < arr[R]) {
        M = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    Head.left = process2(posArr, L, M);
    Head.right = process2(posArr, M + 1, R - 1);
    return Head;
  }
}
