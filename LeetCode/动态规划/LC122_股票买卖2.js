/*
 * @Author: your name
 * @Date: 2020-08-20 11:28:34
 * @LastEditTime: 2020-08-21 11:05:21
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
                 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
                 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @FilePath: \LeetCode\LeetCode\动态规划\LC122_股票买卖2.js
 */

var maxProfit1 = function(prices) {
    let res = 0, buy = prices[0], sale = prices[0], isbuy = false
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy && isbuy == false) {
            buy = sale = prices[i]
        } else {
            if (prices[i] > sale) {
                sale = prices[i]
                isbuy = true
            } else {
                res += sale - buy
                sale = buy = prices[i]
                isbuy = false
            }
        }
        if (i == prices.length - 1) {
            res += sale - buy
        }
    }
    return res
};

// 2. 贪心 只要今天比昨天高，就卖出（问题简化为今天买，明天卖，卖了还能买）
var maxProfit2 = function(prices) {
    let res = 0, len = prices.length;
    for (let i = 0; i < len - 1; i++) {
        let diff = prices[i+1] - prices[i]
        if (diff > 0) {
            res += diff
        }
    }
    return res
};

/**
 * 3. 动态规划
 * dp[i][j], i表示第i天获取的最大利润，j = 0/1
 * dp[i][0]表示第i天没有股票，dp[i][1]表示第i天手上还有股票
 */

 var maxProfit3 = function (prices) {
     let len = prices.length
     if (len < 2) return 0
     let dp = new Array(len)
     for (let i = 0; i < len; i++) {
         dp[i] = new Array(2)
     }
     dp[0][0] = 0, dp[0][1] = -prices[0]

     for (let i = 1; i < len; i++) {
         dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
         dp[i][1] = Math.max(dp[i-1][0] - prices[i], dp[i-1][1])
     }
     return dp[len-1][0]
 }
 
console.log(maxProfit3([7,9,4,3,1]));