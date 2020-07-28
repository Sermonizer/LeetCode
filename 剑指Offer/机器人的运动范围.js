/*
 * @Author: your name
 * @Date: 2020-06-25 20:48:14
 * @LastEditTime: 2020-06-25 21:05:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\机器人的运动范围.js
 */

function movingCount(threshold, rows, cols) {
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
