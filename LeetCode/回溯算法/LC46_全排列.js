/*
 * @Author: your name
 * @Date: 2020-08-18 10:23:19
 * @LastEditTime: 2020-08-18 14:10:18
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC46_全排列.js
 */
var permute = function(nums) {
    let res = []
    let backtrack = (nums, stack) => {
        if (stack.length == nums.length) {
            res.push(stack)
            return 
        }
        for (let i = 0; i < nums.length; i++) {
            if (stack.indexOf(nums[i]) !== -1) continue
            stack.push(nums[i])
            backtrack(nums, stack.slice())
            stack.pop()
        }
    }
    backtrack(nums, [])
    return res
};

console.log(permute([1,2,3]));