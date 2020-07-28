/*
 * @Author: your name
 * @Date: 2020-07-01 10:22:23
 * @LastEditTime: 2020-07-01 10:52:34
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个含有 n 个正整数的数组和一个正整数 s ，
 *               找出该数组中满足其和 ≥ s 的长度最小的连续子数组，
 *               并返回其长度。如果不存在符合条件的连续子数组，返回 0。
 * @思路：
 * 1. 队列 双指针 
 *      后添加的数如果满足和大于s，把前面的数删掉，直到不满足和大于s，保留一下长度
 * @FilePath: \Algorithm\LC209_长度最小的子数组.js
 */

var minSubArrayLen = function (s, nums) {
  let head = 0,
    tail = 0,
    len = Number.MAX_SAFE_INTEGER,
    sum = 0;
    while (tail < nums.length) {
        sum += nums[tail++]
        while (sum >= s) {
            len = Math.min(len, tail - head)
            sum -= nums[head++]
        }
    }
  return len === Number.MAX_SAFE_INTEGER ? 0 : len;
};

minSubArrayLen(15, [15, 10, 3, 5, 1, 7, 4, 9, 2, 8]);
