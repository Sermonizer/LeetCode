/*
 * @Author: your name
 * @Date: 2020-08-02 10:52:32
 * @LastEditTime: 2020-08-02 11:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC3_无重复字符的最长字串.js
 */ 

var lengthOfLongestSubstring = function(s) {
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

console.log(lengthOfLongestSubstring("tmmzuxt"));