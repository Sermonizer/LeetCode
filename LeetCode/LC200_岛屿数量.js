/*
 * @Author: your name
 * @Date: 2020-08-15 15:59:46
 * @LastEditTime: 2020-08-15 16:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC200_岛屿数量.js
 */
var numIslands = function(grid) {
    let sum = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                ganran(grid, i, j)
                sum++
            }
        }
    }
    return sum
    function ganran(grid, i, j) {
        if (grid[i][j] !== '1' || i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return
        grid[i][j] = '2'
        ganran(grid, i+1, j)
        ganran(grid, i-1, j)
        ganran(grid, i, j+1)
        ganran(grid, i, j-1)
    }
};

console.log(numIslands([
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
    ]
));