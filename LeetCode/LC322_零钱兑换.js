/*
 * @Author: your name
 * @Date: 2020-08-15 11:23:36
 * @LastEditTime: 2020-08-15 14:21:58
 * @LastEditors: Please set LastEditors
 * @Description: 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * @FilePath: \LeetCode\LeetCode\LC322_零钱兑换.js
 */

// 1. 未剪枝的dfs，会超时
var coinChange1 = function(coins, amount) {
    return dfs(amount)
    function dfs(count) {
        if (count == 0) return 0
        if (count < 0) return -1
        let res = Infinity
        for (let n of coins) {
            let sub = dfs(count - n)
            if (sub == -1) continue
            res = Math.min(res, 1 + sub)
        }
        return res == Infinity ? -1 : res
    }
};

// 2. 增加了备忘录，进行了剪枝
var coinChange = function(coins, amount) {
    let mem = new Map()
    return dfs(amount)
    function dfs(count) {
        if (mem.has(count)) return mem.get(count)
        if (count == 0) return 0
        if (count < 0) return -1
        let res = Infinity
        for (let n of coins) {
            let sub = dfs(count - n)
            if (sub == -1) continue
            res = Math.min(res, 1 + sub)
        }
        mem.set(count, res == Infinity ? -1 : res)
        return mem.get(count)
    }
};

// 3. 动态规划
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 0; i < dp.length; i++) {
        for (let c of coins) {
            if (i - c < 0) continue
            dp[i] = Math.min(dp[i], 1 + dp[i - c])
        }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount]
};