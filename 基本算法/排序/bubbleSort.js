/*
 * @Author: your name
 * @Date: 2020-08-18 16:57:13
 * @LastEditTime: 2020-08-18 17:53:51
 * @LastEditors: Please set LastEditors
 * @Description: 冒泡排序
 * @FilePath: \LeetCode\基本算法\排序\bubbleSort.js
 */

function bubbleSort1(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

// 改进冒泡排序
function bubbleSort2(arr) {
    let i = arr.length - 1;
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;
    }
    console.log(arr);
}

console.log(bubbleSort2([1,4,2,18,23,9,11,20]));