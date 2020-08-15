/*
 * @Author: your name
 * @Date: 2020-08-15 16:46:31
 * @LastEditTime: 2020-08-15 16:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC463_岛屿的周长.js
 */

// 1. 遍历所有陆地，减去周边相邻的边长
var islandPerimeter = function(grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                let count = 4
                if (i < grid.length - 1 && grid[i+1][j] == '1') {
                    count -= 1
                }
                if (i > 0 && grid[i-1][j] == '1') {
                    count -= 1
                }
                if (j < grid[0].length - 1 && grid[i][j+1] == '1') {
                    count -= 1
                }
                if (j > 0 && grid[i][j-1] == '1') {
                    count -= 1
                }
                res += count
            }
        }
    }
    return res
};