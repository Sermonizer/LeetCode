/*
 * @Author: your name
 * @Date: 2020-08-23 10:45:52
 * @LastEditTime: 2020-08-23 11:35:04
 * @LastEditors: Please set LastEditors
 * @Description: n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC51_N皇后.js
 */

var solveNQueens = function (n) {
  let res = [],
    board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n+1).join(".");
  }
//   console.log(board);
  backtrack(0, board);
  let temp = []
  for (let i = 0; i < res.length; i++) {
      let str = ""
      for (let j = 0; j < res[i].length; j++) {
        str = res[i][j].join("")
        console.log(str);
      }
  }
  return res;

  function backtrack(row, board) {
    if (row == board.length) {
      res.push(JSON.parse(JSON.stringify(board)));
      return;
    }
    let n = board[row].length;
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = "Q";
      backtrack(row + 1, board);
      board[row][col] = ".";
    }
  }

  function isValid(board, row, col) {
    let len = board.length;
    for (let i = 0; i <= row - 1; i++) {
      if (board[i][col] == "Q") {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
      if (board[i][j] == "Q") {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == "Q") {
        return false;
      }
    }
    return true;
  }
};

console.log(solveNQueens(4));
