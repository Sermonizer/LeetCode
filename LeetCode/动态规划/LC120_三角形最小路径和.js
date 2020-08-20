/*
 * @Author: your name
 * @Date: 2020-08-20 09:20:48
 * @LastEditTime: 2020-08-20 09:34:45
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
                 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC120_三角形最小路径和.js
 */
var minimumTotal = function(triangle) {
    let dp = triangle, n = triangle.length, min = Infinity
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j]
            } else if (j == triangle[i].length - 1) {
                dp[i][j] = dp[i-1][triangle[i-1].length - 1] + dp[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + dp[i][j]
            }
            if (i == n-1) {
                min = Math.min(min, dp[i][j])
            }
        }
    }
    return min
};

console.log(minimumTotal([[2], [3,4], [6,5,7], [4,1,8,3]]));