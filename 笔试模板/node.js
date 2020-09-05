/*
 * @Author: your name
 * @Date: 2020-08-13 13:49:16
 * @LastEditTime: 2020-09-05 20:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \笔试本地测试\Node.js\test.js
 */

let readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let [n, m, k] = line.split(" ");
  (n = +n), (m = +m), (k = +k);
  let res = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      res.push(i * j);
    }
  }
  res.sort((a, b) => b - a);
  console.log(res[k - 1]);
});

rl.on("SIGINT", () => {
  rl.close();
});

// 第一行是行数的题
// let readline = require("readline")
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// })

// var k = -1, nums = []
// rl.on("line", function(line) {
//     // k代表输入行数
//     if (k < 0) {
//         k = parseInt(line.trim())
//     } else {
//         // 用数组保存
//         nums.push(parseInt(line.trim()))
//         if (k == nums.length) {
//             for (let i = 0; i < k; i++) {
//                 console.log(cal(nums[i]))
//             }
//         }
//     }
// })

// function cal(n) {
//     if (n <= 2) {
//         return n
//     } else {
//         return 1 + cal(Math.floor(n / 2))
//     }
// }

// 1. 处理单行输入
// let readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.on("line", function (line) {
//   let num = line.split(" ");
//   const a1 = parseInt(num[0]);
//   const a2 = parseInt(num[1]);
//   console.log(a1 + a2);
// });

// 2. 多行输入
// let readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let num = [];
// rl.on("line", function (line) {
//   num.push(line);
//   if (num.length == 2) {
//     const a1 = num[0].split(" ");
//     const a2 = num[1].split(" ");
//     console.log(parseInt(a1[0]) + parseInt(a2[0]));
//   }
// });
