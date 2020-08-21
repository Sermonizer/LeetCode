/*
 * @Author: your name
 * @Date: 2020-08-21 09:35:28
 * @LastEditTime: 2020-08-21 09:54:43
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC53_最大子序和.js
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length).fill(0), max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            dp[i] = nums[0]
        }
        else if (i > 0 && dp[i-1] < 0) {
            dp[i] = nums[i]
        } else {
            dp[i] = dp[i-1] + nums[i]
        }
        max = max > dp[i] ? max : dp[i]
    }
    return max
};