/*
 * @Author: your name
 * @Date: 2020-08-06 10:17:22
 * @LastEditTime: 2020-08-06 10:40:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC60_第k个排列.js
 */

/**
 * 1. 确定某一位、某几位后，可以确定后面有多少种全排列
 * 2. 从0开始计数
 * 3. 用数学的方式确定每一位
 * @param {n个数} n 
 * @param {第k位排列} k 
 */
var getPermutation = function(n, k) {
    // 1. 保存阶乘的值数组
    let candidate = [], res = "", factorials = []
    factorials[0] = 1
    for (let i = 1; i <= n; i++) {
        candidate.push(i)
        factorials[i] = i * factorials[i-1]
    }
    // 如果不从0开始，1、2为一组，3、4为一组，但是3、4 / 2的结果不同，需要额外操作
    k -= 1
    for (let i = n-1; i >= 0; i--) {
        let index = Math.floor(k / factorials[i])
        res = res.concat(candidate.splice(index, 1).toString())
        k -= index * factorials[i]
    }
    return res
};

console.log(getPermutation(3, 3));