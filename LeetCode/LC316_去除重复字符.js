/*
 * @Author: your name
 * @Date: 2020-09-05 11:33:24
 * @LastEditTime: 2020-09-05 11:43:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC316_去除重复字符.js
 */
var removeDuplicateLetters = function(s) {
    let count = new Array(256).fill(0), 
        inStack = new Array(256).fill(false),
        temp = [], res = []
    for (let i of s) {
        count[i.charCodeAt()]++
    }
    for (let i of s) {
        count[i.charCodeAt()]--
        if (inStack[i.charCodeAt()]) continue
        while (!temp.length && temp[temp.length - 1] > i) {
            if (count[temp[temp.length - 1].charCodeAt()] == 0) {
                break
            }
            inStack[temp.pop()] = false
        }
        temp.push(i)
        inStack[i.charCodeAt()] = true
    }
    res.push(temp.pop())
    return res.reverse().toString()
};

console.log(removeDuplicateLetters("bcabc"));