/*
 * @Author: your name
 * @Date: 2020-08-16 18:47:27
 * @LastEditTime: 2020-08-16 18:47:48
 * @LastEditors: Please set LastEditors
 * @Description: 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
                 要求时间复杂度为O(n)。
 * @FilePath: \LeetCode\LeetCode\LC43_最大子数组和.js
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(nums[i-1], 0)
    }
    return Math.max.apply(this, nums)
};