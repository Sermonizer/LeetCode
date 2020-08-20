/*
 * @Author: your name
 * @Date: 2020-08-15 15:18:54
 * @LastEditTime: 2020-08-15 15:20:08
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 * @FilePath: \LeetCode\LeetCode\LC96_不同的二叉搜索树.js
 */

 /**
  * 1. 假设n个节点存在二叉排序树的个数是G(n)，1为根节点，2为根节点，...，n为根节点，
  * 当1为根节点时，其左子树节点个数为0，右子树节点个数为n-1，
  * 同理当2为根节点时，其左子树节点个数为1，右子树节点为n-2，
  * 所以可得 G(n) = G(0) * G(n-1) + G(1) * (n-2) +...+ G(n-1) * G(0)
  */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1 
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j-1] * dp[i - j]
        }
    }
    return dp[n]
};