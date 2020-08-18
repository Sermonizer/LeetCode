/*
 * @Author: your name
 * @Date: 2020-08-18 10:23:27
 * @LastEditTime: 2020-08-18 14:42:48
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC47_全排列2.js
 */

 /**
  * 思路：在一定会产生重复结果集的地方剪枝。
  */
var permuteUnique = function(nums) {
    let res = [], used = []
    nums.sort((a, b) => a - b)
    let backtrack = (nums, stack) => {
        if (stack.length == nums.length) {
            res.push(stack)
            return 
        }
        // 剪枝
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue
            stack.push(nums[i])
            used[i] = true
            backtrack(nums, stack.slice())
            stack.pop()
            used[i] = false
        }
    }
    backtrack(nums, [])
    return res
};