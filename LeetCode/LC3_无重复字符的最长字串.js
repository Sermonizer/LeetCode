/*
 * @Author: your name
 * @Date: 2020-08-02 10:52:32
 * @LastEditTime: 2020-08-13 11:06:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC3_无重复字符的最长字串.js
 */ 

// 1. 利用Map
var lengthOfLongestSubstring1 = function(s) {
    let max = 0, res = new Map(), start = 0
    for (let i = 0; i < s.length; i++) {
        if (res.has(s[i])) {
            start = Math.max(res.get(s[i]), start)
        }
        max = Math.max(max, i - start + 1)
        res.set(s[i], i + 1)
    }
    return max
};

// 滑动窗口
var lengthOfLongestSubstring2 = function(s) {
    let max = 0, left = 0, res = []
    if (s.length === 0) return 0
    for (let i = 0; i < s.length; i++) {
        if (res.indexOf(s[i]) != -1) {
            left = res.indexOf(s[i])
            res.push(s[i])
            while (left-- >= 0) {
                res.shift()
            }
            left = 0
        } else {
            res.push(s[i])
            max = Math.max(max, (res.length - left))
        }
    }
    return max
};

console.log(lengthOfLongestSubstring2("tmmzuxt"));