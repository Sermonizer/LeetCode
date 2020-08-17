/*
 * @Author: your name
 * @Date: 2020-08-17 10:44:40
 * @LastEditTime: 2020-08-17 10:57:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\基本算法\最大公约数.js
 */

/**
 * 最大公约数 * 最小公倍数 = a * b
 * 
 * 1. 碾转相除法求最大公约数
 *      while(r !== 0) {
 *          let r = a % b, a = b, b = r
 *      }
 *      return a
 * 
 * 2. 碾转相除法求三个数的最大公约数
 * 先求两个数，再跟第三个数一起求
 * 
 * 3. 相减法求最大公约数
 *      while(){
 *          if (a > b) a = a - b
 *          if (a < b) b = b - a
 *          else return a
 *      }
 */

 function gcb(a, b) {
     if (b == 0) {
         return a
     }
     return gcb(b, a % b)
 }

 let arr = [2, 3, 4, 5, 7, 9, 13]
 let res = arr[0]
 for (let i = 1; i < arr.length; i++) {
    res = gcb(arr[i], res)
    if (res == 1) break
 }
 if (res == 1) console.log(0);
 else console.log(-1);