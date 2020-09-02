/*
 * @Author: your name
 * @Date: 2020-09-02 16:41:40
 * @LastEditTime: 2020-09-02 16:55:14
 * @LastEditors: Please set LastEditors
 * @Description: 选择排序
 * @FilePath: \LeetCode\基本算法\排序\selectSort.js
 */

/**
 * 选择排序
 */
function selectSort(nums) {
    let index = 0
    for (let i = 0; i < nums.length - 1; i++) {
        index = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[index]) {
                index = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[index]
        nums[index] = temp
    }
    return nums
}

console.log(selectSort([1,5,3,4,7,24,34,22]));