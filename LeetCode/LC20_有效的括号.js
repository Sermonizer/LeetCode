/*
 * @Author: your name
 * @Date: 2020-08-14 10:34:31
 * @LastEditTime: 2020-08-14 10:51:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC20_有效的括号.js
 */

var isValid = function(s) {
    let stack = []
    for (let str of s) {
        if (str == "(") stack.push(")")
        else if (str == "[") stack.push("]")
        else if (str == "{") stack.push("}")
        else if (stack.length == 0 || stack.pop() !== str) return false
    }
    return stack.length == 0
};


var isValid = function(s) {
    let stack = [], i = 1
    let map = {"(": ")", "[": "]", "{": "}"}
    stack.push(s[0])
    while(i !== s.length) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i])
        } else {
            if (stack.length !== 0) {
                let temp = stack.pop() 
                if (map[temp] !== s[i]) {
                    return false
                }
            } else {
                return false
            }
        }
        i++
    }
    return stack.length == 0
};

console.log(isValid("{[]}"));