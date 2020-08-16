/*
 * @Author: your name
 * @Date: 2020-06-25 20:48:14
 * @LastEditTime: 2020-08-16 16:45:19
 * @LastEditors: Please set LastEditors
 * @Description: 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 *               一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），
 *               也不能进入行坐标和列坐标的数位之和大于k的格子。
 *               例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 *               但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 * @FilePath: \Algorithm\机器人的运动范围.js
 */

function movingCount1(threshold, rows, cols) {
  // write code here
  let result = 0;
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i].push(0);
    }
  }

  function findWay(arr, i, j, threshold) {
    if (i < 0 || j < 0 || i >= arr.length || j >= arr[0].length) return;

    let rowH = Math.floor(i / 10),
      rowT = i % 10,
      colH = Math.floor(j / 10),
      colT = j % 10,
      sum = rowH + rowT + colH + colT;
    if (sum > threshold || arr[i][j] != 0) return;
    arr[i][j] = 1;
    result += 1;
    findWay(arr, i + 1, j, threshold);
    findWay(arr, i, j + 1, threshold);
    findWay(arr, i, j - 1, threshold);
    findWay(arr, i - 1, j, threshold);
  }

  findWay(arr, 0, 0, threshold);
  return result;
}

// dfs
var movingCount2 = function(m, n, k) {
  let direct = [[1, 0], [0, 1]], res = 0
  let visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false)
  }
  dfs(0, 0, k)
  return res
  function dfs(x, y, k) {
      if (notArea(x, y) || visited[x][y] == true) {
          return
      }
      if (cal(x) + cal(y) <= k) {
          res++
          visited[x][y] = true
          for (let i = 0; i < 2; i++) {
              let newX = x + direct[i][0]
              let newY = y + direct[i][1]
              dfs(newX, newY, k)
          }
      }
  }
  function notArea(x, y) {
      return x < 0 || x > m-1 || y < 0 || y > n-1
  }
  function cal(x) {
      let s = 0
      while(x !== 0) {
          s += x % 10
          x = Math.floor(x / 10)
      }
      return s
  }
};

console.log(movingCount2(2,3,1));