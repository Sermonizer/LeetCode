/*
 * @Author: your name
 * @Date: 2020-08-18 10:22:06
 * @LastEditTime: 2020-08-18 10:55:05
 * @LastEditors: Please set LastEditors
 * @Description: 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
                 说明：解集不能包含重复的子集。
 * @FilePath: \LeetCode\LeetCode\回溯算法\LC78_子集.js
 */

/**
 * 1. subset([1,2,3]) = subset([1,2]) + [[3], [1,2,3], [1,3], [2,3]]
 * 也就是说，下一个子集 = 上一个子集的每一个数组都加上新增的数
 */
var subsets1 = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; i++) {
    res.forEach((e) => {
      res.push(e.concat(nums[i]));
    });
  }
  return res;
};

/**
 * 2. 回溯算法
 */
function subsets2(nums) {
  let res = [],
    track = [],
    len = nums.length;
  let backtrack = (nums, start, track) => {
    res.push(track);
    for (let i = start; i < len; i++) {
      // 做选择
      track.push(nums[i]);
      // 回溯
      backtrack(nums, i + 1, track.slice());
      // 撤销选择
      track.pop();
    }
  }
  backtrack(nums, 0, track);
  return res;
}

console.log(subsets2([1, 2, 3]));
