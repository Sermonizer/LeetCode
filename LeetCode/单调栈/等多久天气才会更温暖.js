/*
 * @Author: your name
 * @Date: 2020-09-05 21:57:50
 * @LastEditTime: 2020-09-05 22:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\单调栈\等多久天气才会更温暖.js
 */
function wendu(nums) {
    let res = [], stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop()
        }
        res[i] = stack.length == 0 ? 0 : (stack[stack.length - 1] - i)
        stack.push(i)
    }
    return res
}

console.log(wendu([73,74,75,71,69,72,76,73]));