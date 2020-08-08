/*
 * @Author: your name
 * @Date: 2020-08-08 20:29:29
 * @LastEditTime: 2020-08-08 20:39:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC866_回文素数.js
 */

//  暴力法 会超时
var primePalindrome = function(N) {
    function isHuiwen(num) {
        let s = num.toString()
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] != s[s.length - i - 1]){
                return false
            }
        }
        return true
    }
    function isSu(num) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
    for (let i = N; i < Infinity; i++) {
        if (i == 1) continue
        if (isHuiwen(i) && isSu(i)) {
            return i
        }
    }
};

/**
 * 数学方法:
 */
console.log(primePalindrome(1));