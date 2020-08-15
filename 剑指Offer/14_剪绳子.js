/*
 * @Author: your name
 * @Date: 2020-08-15 10:22:49
 * @LastEditTime: 2020-08-15 10:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\剑指Offer\14_剪绳子.js
 */

// 1. 数学推导
var integerBreak = function(n) {
    let res = 0, a = 0, b = 0
    if (n <= 3) return n-1
    a = Math.floor(n / 3)
    b = n % 3
    if (b == 0) {
        return Math.pow(3, a)
    } else if (b == 1) {
        return Math.pow(3, a - 1) * 4
    } else {
        return Math.pow(3, a) * 2
    }
};

// 2. 动态规划
var integerBreak = function(n) {
    let dp = []
    dp[0] = dp[1] = 0
    for (let i = 2; i <= n; i++) {
        let max = 0
        for (let j = 1; j < i; j++) {
            max = Math.max(max, Math.max(j * (i - j), j * dp[i-j]))
        }
        dp[i] = max
    }
    return dp[n]
};