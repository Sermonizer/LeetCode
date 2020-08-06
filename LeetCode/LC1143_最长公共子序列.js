/*
 * @Author: your name
 * @Date: 2020-08-06 22:42:36
 * @LastEditTime: 2020-08-06 22:50:06
 * @LastEditors: Please set LastEditors
 * @Description: 
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
 * 一个字符串的子序列是指这样一个新的字符串：
 * 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。
 * 若这两个字符串没有公共子序列，则返回 0。
 * @FilePath: \LeetCode\LeetCode\LC1143_最长公共子序列.js
 */
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length, len2 = text2.length, dp = []
    // 构建 DP table 和 base case
    for (let i = 0; i <= len1; i++) {
        dp[i] = []
        for (let j = 0; j <= len2; j++) {
            dp[i][j] = 0
        }
    }
    // 进行状态转移
    for (let i = 1; i <=len1; i++) {
        for (let j = 1; j <=len2; j++) {
            // 找到一个 lcs 中的字符
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1 
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[len1][len2]
};