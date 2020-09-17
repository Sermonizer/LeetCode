/*
 * @Author: your name
 * @Date: 2020-09-16 17:00:28
 * @LastEditTime: 2020-09-16 17:02:53
 * @LastEditors: Please set LastEditors
 * @Description: 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 *               每一列都按照从上到下递增的顺序排序。请完成一个函数，
 *               输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @FilePath: \LeetCode\剑指Offer\二维数组的查找.js
 */

var findNumberIn2DArray = function(matrix, target) {
    let row = matrix.length, col = matrix[0].length
    let i = 0, j = col - 1
    while(i < row && j >= 0) {
        if (matrix[i][j] > target) {
            j--
        } else if (matrix[i][j] < target) {
            i++
        } else {
            return true
        }
    }
    return false
};

console.log(findNumberIn2DArray([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));