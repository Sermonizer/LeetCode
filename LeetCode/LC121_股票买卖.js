/*
 * @Author: your name
 * @Date: 2020-08-03 11:42:39
 * @LastEditTime: 2020-08-03 11:43:25
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
                如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），
                设计一个算法来计算你所能获取的最大利润。
                注意：你不能在买入股票前卖出股票。
 * @FilePath: \LeetCode\LeetCode\LC121_股票买卖.js
 */

var maxProfit = function(prices) {
    if (prices.length <= 1) {
        return 0
    }
    let min = prices[0], max = 0
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return max
};