/*
 * @Author: your name
 * @Date: 2020-08-14 11:27:43
 * @LastEditTime: 2020-08-14 11:30:08
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * @FilePath: \LeetCode\LeetCode\LC26_删除排序数组中的重复项.js
 */

/**
 * 1. 双指针
 * 数组有序，相同的数字一定相邻
 * 利用两个指针，比较当前位置的元素是否相等
 * 若相等，后一个指针后移
 * 若不等，前一个指针的后一位与后一个指针的值进行交换，两个指针都后移
 * 重复上述过程
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return nums
    let p = 0, q = 1
    while (q !== nums.length) {
        if(nums[p] !== nums[q]) {
            nums[p+1] = nums[q]
            p++
        }
        q++
    }
    return p+1
};