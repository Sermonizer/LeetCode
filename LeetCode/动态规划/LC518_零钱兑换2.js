/*
 * @Author: your name
 * @Date: 2020-09-27 12:02:22
 * @LastEditTime: 2020-09-27 12:07:16
 * @LastEditors: Please set LastEditors
 * @Description: 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。
 *               假设每一种面额的硬币有无限个。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC518_零钱兑换2.js
 */
var change = function(amount, coins) {
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]]
        }
    }
    return dp[amount]
};

console.log(change(5, [1,2,3]));