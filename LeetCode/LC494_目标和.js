/*
 * @Author: your name
 * @Date: 2020-08-14 18:25:35
 * @LastEditTime: 2020-08-14 18:27:08
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。
 * 现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数
 * @FilePath: \LeetCode\LeetCode\LC494_目标和.js
 */

// 1. DFS
var findTargetSumWays = function(nums, S) {
    return dfs(nums, S, 0)
    function dfs(nums, target, left) {
        if (target == 0 && left == nums.length) return 1
        if (left >= nums.length) return 0
        let res = 0
        res += dfs(nums, target - nums[left], left + 1)
        res += dfs(nums, target + nums[left], left + 1)
        return res
    } 
};

// 2. 0-1背包