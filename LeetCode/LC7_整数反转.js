/*
 * @Author: your name
 * @Date: 2020-08-13 11:16:39
 * @LastEditTime: 2020-08-13 11:16:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC7_整数反转.js
 */
var reverse = function(x) {
    let res = 0
    // let isFu = false, res = 0
    // if (x < 0) {
    //     isFu = true
    //     x = -x
    // }
    while (x !== 0) {
        res = res * 10 + x % 10
        x = Math.floor(x / 10)
    }
    if (res > Math.pow(2, 31) - 1 || -res < -Math.pow(2, 31)) return 0
    return res
};

console.log(reverse(-123));