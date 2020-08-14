/*
 * @Author: your name
 * @Date: 2020-07-02 10:48:15
 * @LastEditTime: 2020-08-14 11:37:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LC215_数组中第K大的元素.js
 */ 
var findKthLargest = function(nums, k) {
    let arr = nums.sort((a, b) => a - b)
    return arr[arr.length - k]
};


console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));

