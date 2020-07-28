/*
 * @Author: your name
 * @Date: 2020-07-06 10:39:39
 * @LastEditTime: 2020-07-06 10:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LC3_无重复字符的最长子串.js
 */ 

var lengthOfLongestSubstring = function(s) {
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

console.log(lengthOfLongestSubstring("pwwkew"));
