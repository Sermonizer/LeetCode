/*
 * @Author: your name
 * @Date: 2020-07-05 10:20:51
 * @LastEditTime: 2020-07-05 10:29:40
 * @LastEditors: Please set LastEditors
 * @Description: 给你两个有序整数数组 nums1 和 nums2，
 *               请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * @思路：有序数组，考虑使用双指针。从后往前填充，就不用开辟多余的空间
 * @FilePath: \Algorithm\LC88_合并两个有序数组.js
 */

var merge = function(nums1, m, nums2, n) {
    let p = m-- + n-- - 1
    while (m >= 0 && n >= 0) {
        nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
    while (n >= 0) {
        nums1[p--] = nums2[n--]
    }
};
