/*
 * @Author: your name
 * @Date: 2020-08-16 10:04:00
 * @LastEditTime: 2020-08-16 10:06:00
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
                 设计一个算法计算出最大利润。在满足以下约束条件下，
                 你可以尽可能地完成更多的交易（多次买卖一支股票）:

                 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
                 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * @FilePath: \LeetCode\LeetCode\LC309_股票利润含冷冻期.js
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0
    let dp = new Array(prices.length)
    for (let i = 0; i < prices.length; i++) {
        dp[i] = new Array(3)
    }
    /**
     * dp[i][0]: 代表当前不持有且没卖出的最大利润
     * dp[i][1]: 代表当前持有的最大利润
     * dp[i][2]: 代表当前不持有且当天卖掉了的最大利润
     */
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2])
        dp[i][1] = Math.max(dp[i-1][0] - prices[i], dp[i-1][1])
        dp[i][2] = dp[i-1][1] + prices[i]
    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2])
};