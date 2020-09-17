/*
 * @Author: your name
 * @Date: 2020-09-17 10:40:08
 * @LastEditTime: 2020-09-17 10:43:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\剑指Offer\替换空格.js
 */
var replaceSpace = function(s) {
    let str = s.split("")
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] == " ") {
            str.splice(i, 1, "%20")
        }
    }
    let res = str.join("")
    return res
};

console.log(replaceSpace("We are happy."));