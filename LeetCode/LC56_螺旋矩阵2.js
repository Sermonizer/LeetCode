/*
 * @Author: your name
 * @Date: 2020-08-21 20:36:48
 * @LastEditTime: 2020-08-21 20:43:20
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * @FilePath: \LeetCode\LeetCode\LC56_矩阵.js
 */
var generateMatrix = function (n) {
    let num = 1, mat = new Array(n), tar = n * n
    for (let i = 0; i < n; i++) {
        mat[i] = new Array(n)
    }
    let l = 0, r = n - 1, t = 0, b = n - 1
    while (num <= tar) {
        for (let i = l; i <= r; i++) {
            mat[t][i] = num++
        }
        t++;
        for (let i = t; i <= b; i++) {
            mat[i][r] = num++
        }
        r--;
        for (let i = r; i >= l; i--) {
            mat[b][i] = num++
        }
        b--;
        for (let i = b; i >= t; i--) {
            mat[i][l] = num++
        }
        l++;
    }
    return mat
};
console.log(generateMatrix(3));