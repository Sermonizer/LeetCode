/*
 * @Author: your name
 * @Date: 2020-08-17 11:20:22
 * @LastEditTime: 2020-08-17 11:32:44
 * @LastEditors: Please set LastEditors
 * @Description: 在一条数轴上有 N 家商店，它们的坐标分别为 A1~AN。
                 现在需要在数轴上建立一家货仓，每天清晨，从货仓到每家商店都要运送一车商品。
                 为了提高效率，求把货仓建在何处，可以使得货仓到每家商店的距离之和最小。
 * @FilePath: \LeetCode\基本算法\仓库选址问题.js
 */

/**
 * 任意a, b, c, |a - c| + |b - c|的最小值当且仅当c在a、b之间取到
 * 因此当n为偶数，取n/2, (n+1)/2任意一点即可
 * n为奇数，取(n+1)/2
 */
let arr = [6, 2, 9, 1, 5], res = 0
let len = arr.length - 1
arr.sort((a, b) => a - b)
for (let i = 0; i < Math.floor(len / 2) + 1; i++) {
    res += (arr[len - i] - arr[i])
}
console.log(res);