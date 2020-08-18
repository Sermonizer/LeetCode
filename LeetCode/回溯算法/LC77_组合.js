/*
 * @Author: your name
 * @Date: 2020-08-18 10:23:48
 * @LastEditTime: 2020-08-18 11:24:10
 * @LastEditors: Please set LastEditors
 * @Description: 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC77_组合.js
 */

 /**
  * 1. 这也是典型的回溯算法，k 限制了树的高度，n 限制了树的宽度，
  *    继续套我们以前讲过的回溯算法模板框架就行了：
  */
var combine1 = function(n, k) {
    let res = []
    if (n <= 0 || k <= 0) return res
    let backtrack = (n, k, start, track) => {
        if (k == track.length) {
            res.push(track)
            return 
        }
        for (let i = start; i <= n; i++) {
            track.push(i)
            backtrack(n, k, i + 1, track.slice())
            track.pop()
        }
    }
    backtrack(n, k, 1, [])
    return res
};

// 剪枝
var combine2 = function(n, k) {
    let res = []
    if (n <= 0 || k <= 0) return res
    let backtrack = (n, k, start, track) => {
        if (k == track.length) {
            res.push(track)
            return 
        }
        // 在这里剪枝
        for (let i = start; i <= n - (k - track.length) + 1; i++) {
            track.push(i)
            backtrack(n, k, i + 1, track.slice())
            track.pop()
        }
    }
    backtrack(n, k, 1, [])
    return res
};

console.log(combine1(4, 2));