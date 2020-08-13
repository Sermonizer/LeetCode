/*
 * @Author: your name
 * @Date: 2020-08-13 10:18:53
 * @LastEditTime: 2020-08-13 10:20:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC5_最长回文子串.js
 */

// 1. 动态规划
var longestPalindrome = function(s) {
    let dp = [], len = s.length, maxLen = 1, begin = 0
    if (len < 2) return s
    for (let i = 0; i < len; i++) {
        dp[i] = []
    }
    // 循环方向很重要，要保证用到的地方先指定了值
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] == s[j]) {
                // 当j - i < 3时，表明中间只有一个或0个字符，必是回文
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if (dp[i][j] && (j - i + 1) > maxLen) {
                begin = i
                maxLen = j - i + 1
            }
        }
    }
    return s.slice(begin, (maxLen + begin))
};