/*
 * @Author: your name
 * @Date: 2020-08-18 10:23:03
 * @LastEditTime: 2020-08-19 10:27:17
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
                 说明：解集不能包含重复的子集。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC90_子集2.js
 */

 /**
  * 1. 为什么会生成重复子列？
  * 因为该算法是在原数列上重复添加新值，而如果当前值与上一个重复了，那么就会造成重复
  */
var subsetsWithDup1 = function(nums) {
    let res = [[]], left = 0, right = 1, len = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i-1]) {
            left = res.length - len
        } else {
            left = 0
        }
        right = res.length
        len = right - left
        for (let j = left; j < right; j++) {
            let temp = [...res[j]]
            temp.push(nums[i])
            res.push(temp)
        }
    }
    return res
};

var subsetsWithDup2 = function(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    let backtrack = (nums, start, stack) => {
        res.push(stack.slice())
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue
            stack.push(nums[i])
            backtrack(nums, i + 1, stack)
            stack.pop()
        }
    }
    backtrack(nums, 0, [])
    return res
};

console.log(subsetsWithDup2([1,2,2]));