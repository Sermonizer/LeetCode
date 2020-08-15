/*
 * @Author: your name
 * @Date: 2020-08-15 09:58:47
 * @LastEditTime: 2020-08-15 10:04:20
 * @LastEditors: Please set LastEditors
 * @Description: 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
 * @FilePath: \LeetCode\剑指Offer\63_股票的最大利润.js
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    let min = prices[0], max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > min) {
            max = max < (prices[i] - min) ? (prices[i] - min) : max
        } else {
            min = prices[i]
        }
    }
    return max
};