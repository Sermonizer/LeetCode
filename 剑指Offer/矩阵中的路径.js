/*
 * @Author: your name
 * @Date: 2020-06-29 09:25:07
 * @LastEditTime: 2020-06-29 10:41:03
 * @LastEditors: Please set LastEditors
 * @Description: 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 *               路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 *               如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。
 *
 * @思路:
 * @FilePath: \Algorithm\矩阵中的路径.js
 */

function hasPath(matrix, rows, cols, path) {
  // write code here
  //标志位，初始化为false
  let flag = new Array(matrix.length);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //循环遍历二维数组，找到起点等于str第一个元素的值，再递归判断四周是否有符合条件的----回溯法
      if (judge(matrix, rows, cols, i, j, flag, path, 0)) {
        return true;
      }
    }
  }
  return false;
}

//judge(初始矩阵，索引行坐标i，索引纵坐标j，矩阵行数，矩阵列数，待判断的字符串，字符串索引初始为0即先判断字符串的第一位)
function judge(matrix, rows, cols, i, j, flag, path, k) {
  //先根据i和j计算匹配的第一个元素转为一维数组的位置
  let index = i * cols + j;
  //递归终止条件
  if (
    i < 0 ||
    i >= rows ||
    j < 0 ||
    j >= cols ||
    flag[index] == true ||
    matrix[index] != path[k]
  ) {
    return false;
  }
  //若k已经到达str末尾了，说明之前的都已经匹配成功了，直接返回true即可
  if (k === path.length - 1) {
    return true;
  }
  //要走的第一个位置置为true，表示已经走过了
  flag[index] = true;
  //回溯，递归寻找，每次找到了就给k加一，找不到，还原
  if (
    judge(matrix, rows, cols, i - 1, j, flag, path, k + 1) ||
    judge(matrix, rows, cols, i + 1, j, flag, path, k + 1) ||
    judge(matrix, rows, cols, i, j - 1, flag, path, k + 1) ||
    judge(matrix, rows, cols, i, j + 1, flag, path, k + 1)
  ) {
    return true;
  }
  //走到这，说明这一条路不通，还原，再试其他的路径
  flag[index] = false;
  return false;
}

console.log(hasPath("ABCESFCSADEE", 3, 4, "ABCCED"));
