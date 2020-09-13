/*
 * @Author: your name
 * @Date: 2020-09-13 10:20:12
 * @LastEditTime: 2020-09-13 10:21:03
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
                 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC647_回文子串数.js
 */

// 1. 动态规划
var countSubstrings = function(s) {
    let len = s.length, count = 0
    let dp = new Array(len)
    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len)
        dp[i][0] = true
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            if (s[i] == s[j] && (i - j < 2 || dp[j+1][i-1])) {
                dp[j][i] = true
                count++
            }
        }
    }
    return count
};

// 2. 中心扩散

