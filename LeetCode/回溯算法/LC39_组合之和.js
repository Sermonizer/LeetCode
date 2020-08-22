/*
 * @Author: your name
 * @Date: 2020-08-05 10:46:48
 * @LastEditTime: 2020-08-22 10:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC39_组合之和.js
 */
var combinationSum = function(candidates, target) {
    let res = [], start = 0
    candidates.sort()
    caps(0, target, [], res)
    return res

    function caps(start, target, temp, res) {
        if (target < 0) return 
        if (target == 0) {
            res.push([...temp])
        }
        for (let i = start; i < candidates.length && target >= candidates[i]; i++) {
            temp.push(candidates[i])
            caps(i, target - candidates[i], temp, res)
            temp.pop()
        }
    }
};

console.log(combinationSum([2,3,6,7], 7));