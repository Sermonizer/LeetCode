/*
 * @Author: your name
 * @Date: 2020-08-07 09:47:35
 * @LastEditTime: 2020-08-07 10:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC1_两数之和.js
 */
var twoSum1 = function(nums, target) {
    if (nums.length < 1) return []
    let res = [], i = 0, len = nums.length
    while (i < len - 1) {
        if (nums.lastIndexOf(target - nums[i]) > i) {
            res.push(i, nums.indexOf(target - nums[i]))
            return res
        }
        i++
    }
    return []
};

// 用hash表实现
var twoSum2 = function(nums, target) {
    if (nums.length < 1) return []
    let res = new Map(), temp = []
    for (let [index, item] of nums.entries()) {
        if (res.has(target - item)) {
            temp.push(index, res.get(target - item))
            return temp
        } else {
            res.set(item, index)
        }
    }
    return []
};

console.log(twoSum2([3,3], 6));