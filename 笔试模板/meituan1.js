/*
 * @Author: your name
 * @Date: 2020-09-06 10:07:59
 * @LastEditTime: 2020-09-06 10:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\笔试模板\meituan1.js
 */
let readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
let num = []
rl.on("line", function(line) {
    num.push(line)
    if (num.length == 3) {
        let sum = num[0].split(" ")
        let a = num[1].split(" "), b = num[2].split(" ")
        let n1 = 0, n2 = 0, n3 = 0, res = new Map()
        for (let i = 0; i < a.length; i++) {
            res.add(+a[i])
        }
        for (let i = 0; i < b.length; i++) {
            if (res.has(+b[i])) {
                n3++
            } else {
                n2++
            }
        }
        n1 = sum[1] - n3
    }
    console.log(n1, n2, n3);
})
rl.on("SIGINT", () => {
    rl.close();
  });