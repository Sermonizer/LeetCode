/*
 * @Author: your name
 * @Date: 2020-08-13 10:18:53
 * @LastEditTime: 2020-08-20 10:40:04
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000
 * @FilePath: \LeetCode\LeetCode\LC5_最长回文子串.js
 */

// 1. 动态规划
var longestPalindrome1 = function(s) {
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

// 中心扩散法
var longestPalindrome2 = function(s) {
    if (s.length < 2) return s
    let maxLen = 1, res = s.slice(0, 1)
    let huiwen = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left+1, right)
    }
    for (let i = 0; i < s.length - 1; i++) {
        let res1 = huiwen(s, i, i), // 奇数中心
        res2 = huiwen(s, i, i+1); // 偶数中心
        let maxRes = res1.length > res2.length ? res1 : res2
        if (maxRes.length > maxLen) {
            maxLen = maxRes.length
            res = maxRes
        }
    }
    return res
};

console.log(longestPalindrome2("cbbd"));