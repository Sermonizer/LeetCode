/*
 * @Author: your name
 * @Date: 2020-09-05 21:47:20
 * @LastEditTime: 2020-09-05 21:53:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\单调栈\下一个更大的元素.js
 */

function next(nums) {
    let res = [], stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && nums[i] >= stack[stack.length - 1]) {
            stack.pop()
        }
        res[i] = stack.length == 0 ? -1 : stack[stack.length - 1]
        stack.push(nums[i])
    }    
    return res
}
console.log(next([2,1,2,4,3]));