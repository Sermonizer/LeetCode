/*
 * @Author: your name
 * @Date: 2020-09-17 10:26:45
 * @LastEditTime: 2020-09-17 10:33:51
 * @LastEditors: Please set LastEditors
 * @Description: 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * @FilePath: \LeetCode\剑指Offer\数组中重复的数字.js
 */
var findRepeatNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) {
            if (nums[i] !== nums[nums[i]]) {
                let temp = nums[i]
                nums[i] = nums[temp]
                nums[temp] = temp
            } else {
                return nums[i]
            }
        }
    }
    return -1
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));