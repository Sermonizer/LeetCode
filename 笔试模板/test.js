/*
 * @Author: your name
 * @Date: 2020-08-15 18:58:48
 * @LastEditTime: 2020-08-16 21:13:32
 * @LastEditors: Please set LastEditors
 * @Description: 本地调试就用这个模板
 * @FilePath: \笔试本地测试\Node.js\test.js
 */

let readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let num = []
rl.on("line", function(line) {
    num.push(line)
})

function find(num) {
    let temp = num.shift().split(" ") 
    let [M, P] = temp 
    M = parseInt(M), P = parseInt(P)
    let dp = new Array(P+1).fill(0), value = [], day = [], max = 0
    for (let i = 0; i <= P; i++) {
        dp[i] = new Array(M).fill(0)
    }
    while (num.length !== 0) {
        let m = M
        while (m--) {
            let temp2 = num.shift().split(" ")
            value.push(parseInt(temp2[0]))
            day.push(parseInt(temp2[1]))
        }
    }
    for (let i = 1; i <= P; i++) {
        for (let j = 0; j < M; j++) {
            if (i < day[j]) {
                dp[i][j] = dp[i][j-1]
                continue
            }
            let d = i - day[j]
            dp[i][j] = Math.max(dp[d][j-1] + value[j], dp[i][j-1])
            max = Math.max(dp[i][j], max)
        }
    }
    console.log(max)
}

rl.on('SIGINT', () => {
    find(num)
    rl.close()
})

// let readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal:false
// });

// let N, M, a, b, c, times = 0, ary;

// function getRoot(idx) {
//   if (ary[idx] === idx) return idx;
//   ary[idx] = getRoot(ary[idx]);
//   return ary[idx];
// }

// rl.on('line', function(line){
//   if (times === 0) {
//     [N, M] = line.split(' ').map(Number);
//     ary = new Array(N+1);
//     for (let i=1; i<=N; i++) {
//       ary[i] = i;
//     }
//   } else if (times <= M) {
//     [a, b, c] = line.split(' ').map(Number);
//     if (c === 1) {
//       let aroot = getRoot(a),
//           broot = getRoot(b);
//       if (aroot !== broot) {
//         ary[aroot] = broot;
//       } 
//     } 
//   }
//   if (times === M) {
//     let cnt = 0;
//     let resRoot = getRoot(1);
//     for (let i=2; i<=N; i++) {
//       if (resRoot === getRoot(i)) cnt++;
//     }
//     console.log(cnt);
//     times = 0;
//     return;
//   }
//   times ++;
// });