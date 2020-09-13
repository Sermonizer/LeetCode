/*
 * @Author: your name
 * @Date: 2020-08-13 13:49:16
 * @LastEditTime: 2020-09-12 14:42:22
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

// 2. 固定行数输入
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

// 3. 第一行是行数
// let readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [],
//   t;
// rl.on("line", function (line) {
//   if (line.length == 1) {
//     t = parseInt(line);
//   } else {
//     input.push(line.split(" "));
//   }
//   if (input.length == t) {
//     for (let i = 0; i < t; i++) {
//       console.log(parseInt(input[i][0]) + parseInt(input[i][1]));
//     }
//   }
// });

// 4. 不定行数输入
// let readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// rl.on("line", function(line){
//     let temp = line.split(' ')
//     console.log(parseInt(temp[0]) + parseInt(temp[1]))
// })

// 5. 不定行数 指定输入结束
// let readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = []
// rl.on("line", function(line) {
//     let temp = line.split(' ')
//     let a1 = parseInt(temp[0])
//     let a2 = parseInt(temp[1])
//     if (a1 == 0 && a2 == 0) {
//       for (let i = 0; i < input.length; i++) {
//         console.log(input[i][0] + input[i][1])
//       }
//       process.exit()
//     } else {
//       input.push([a1, a2])
//     }
// })

// 6. 不定行数 每行第一个为该行个数
// let readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on("line", function (line) {
//   let temp = line.split(" ");
//   if (parseInt(temp[0]) == 0) {
//     for (let i = 0; i < input.length; i++) {
//       let res = 0;
//       for (let j = 1; j <= parseInt(input[i][0]); j++) {
//         res += parseInt(input[i][j]);
//       }
//       console.log(res);
//     }
//     process.exit();
//   }
//   input.push(temp);
// });
