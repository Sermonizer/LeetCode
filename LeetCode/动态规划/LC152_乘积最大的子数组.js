/*
 * @Author: your name
 * @Date: 2020-08-20 11:17:00
 * @LastEditTime: 2020-08-20 11:18:21
 * @LastEditors: Please set LastEditors
 * @Description: 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），
 *               并返回该子数组所对应的乘积。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC152_乘积最大的子数组.js
 */

// 1. 当前值是负数时，交换最大值、最小值
var maxProduct = function(nums) {
    let max = -Infinity, imax = 1, imin = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = imax
            imax = imin
            imin = temp
        }
        imax = Math.max(imax * nums[i], nums[i])
        imin = Math.min(imin * nums[i], nums[i])
        max = Math.max(max, imax)
    }
    return max
};

// 2. 