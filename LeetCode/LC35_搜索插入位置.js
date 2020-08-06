/*
 * @Author: your name
 * @Date: 2020-08-05 09:57:54
 * @LastEditTime: 2020-08-05 09:58:35
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 *               如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 *               你可以假设数组中无重复元素。
 * @FilePath: \Algorithm\LeetCode\LC35_搜索插入位置.js
 */

var searchInsert = function(nums, target) {
    let len = nums.length, left = 0, right = len - 1
    if (len == 0) return 0
    if (nums[len - 1] < target) return len
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};