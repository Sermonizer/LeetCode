/*
 * @Author: your name
 * @Date: 2020-08-14 10:03:45
 * @LastEditTime: 2020-08-14 10:17:35
 * @LastEditors: Please set LastEditors
 * @Description: 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @FilePath: \LeetCode\LeetCode\LC11_盛最多水的容器.js
 */

// 1. 动态规划
var maxArea = function(height) {
    if (height.length <= 1) return null
    let dp = [], max = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i+1; j < height.length; j++) {
            dp[j] = Math.min(height[i], height[j]) * (j - i)
            max = Math.max(dp[j], max)
        }
    }
    return max
};

// 2. 双指针
var maxArea = function(height) {
    if (height.length <= 1) return null
    let i = 0, j = height.length - 1, max = 0
    while(i < j) {
        max = Math.max(Math.min(height[i], height[j]) * (j - i), max)
        if (height[i] < height[j]) i++
        else j--
    }
    return max
};