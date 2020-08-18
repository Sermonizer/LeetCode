/*
 * @Author: your name
 * @Date: 2020-08-05 11:08:57
 * @LastEditTime: 2020-08-05 11:33:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC40_组合之和2.js
 */
var combinationSum2 = function(candidates, target) {
    let res = [], temp = [], start = 0
    candidates.sort((a, b) => a - b)
    helper(start, candidates, res, target, temp)
    return res

    function helper(start, arr, res, target, temp) {
        if (target < 0) return 
        if (target == 0) {
            res.push([...temp])
        }
        for (let i = start; i < arr.length && target >= arr[i]; i++) {
            if (i > start && arr[i] == arr[i -1]) continue
            temp.push(arr[i])
            helper(i + 1, arr, res, target - arr[i], temp)
            temp.pop()
        }
    }
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));