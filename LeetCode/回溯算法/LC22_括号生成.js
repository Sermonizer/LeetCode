/*
 * @Author: your name
 * @Date: 2020-08-22 09:47:44
 * @LastEditTime: 2020-08-22 10:21:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC22_括号生成.js
 */
var generateParenthesis = function(n) {
    let res = [], left = n, right = n
    return dfs("", n, n, res)
    function dfs(str, left, right, res) {
        if (left > right) return 
        if (left == 0 && right == 0) {
            res.push(str)
            return 
        }
        if (left > 0) {
            dfs(str+"(", left-1, right, res)
        }
        if (right > 0) {
            dfs(str+")", left, right-1, res)
        }
    }
};

console.log(generateParenthesis(3));