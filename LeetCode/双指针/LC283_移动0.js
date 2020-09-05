/*
 * @Author: your name
 * @Date: 2020-09-03 10:21:01
 * @LastEditTime: 2020-09-03 10:27:07
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @FilePath: \LeetCode\LeetCode\双指针\LC283_移动0.js
 */
function move1(nums) {
  let j = 0,
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  for (let i = j; i < len; i++) {
    nums[i] = 0;
  }
  return nums;
}

// 一次遍历
function move2(nums) {
  let j = 0,
    len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j++] = temp;
    }
  }
  return nums;
}
console.log(move2([0, 3, 0, 12, 0, 0, 1]));
