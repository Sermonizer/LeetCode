/*
 * @Author: your name
 * @Date: 2020-08-22 08:53:37
 * @LastEditTime: 2020-08-22 09:46:36
 * @LastEditors: Please set LastEditors
 * @Description: 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
                 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
                 必须原地修改，只允许使用额外常数空间。
 * @FilePath: \LeetCode\LeetCode\LC31_下一个排列.js
 */

var nextPermutation = function (nums) {
  len = nums.length;
  if (len < 2) return nums;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      for (let k = len - 1; k >= i + 1; k--) {
        if (nums[k] > nums[i]) {
          [nums[i], nums[k]] = [nums[k], nums[i]];
          // 原地冒泡排序   
          let j = len - 1;
          while (j > i) {
            let pos = 0;
            for (let n = i+1; n < j; n++) {
              if (nums[n] > nums[n + 1]) {
                pos = n;
                const temp = nums[n];
                nums[n] = nums[n + 1];
                nums[n + 1] = temp;
              }
            }
            // 每次将最大值放到最后，下次遍历时就不遍历这个位置了，减少不必要的遍历次数
            j = pos;
          }
          return nums
        }
      }
    }
  }
  return nums.reverse()
};

console.log(nextPermutation([1,2,3,8,5,7,6,4]));
