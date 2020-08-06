/*
 * @Author: your name
 * @Date: 2020-08-04 09:42:34
 * @LastEditTime: 2020-08-04 10:02:21
 * @LastEditors: Please set LastEditors
 * @Description: 编写一个函数来查找字符串数组中的最长公共前缀。
                 如果不存在公共前缀，返回空字符串 ""
 * @FilePath: \Algorithm\LeetCode\LC14_最长公共前缀.js
 */

// 先排序：因为按字符串排序的，所以排序后会有序；然后比较第一个和最后一个即可
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) return ""
    let first = (strs.sort())[0],
        last = (strs.sort())[strs.length - 1],
        minLen = first.length > last.length ? last.length : first.length
        prev = ""
    for (let i = 0; i < minLen; i++) {
        if(first[i] === last[i]) {
            prev += first[i]
        } else {
            break
        }
    }
    return prev
};

// 两两比较
var longestCommonPrefix = function(strs) {
    if (strs.length < 1) return ""
    let res = strs[0]
    for (let str of strs) {
        while(str.indexOf(res) !== 0) {
            if (res.length === 1) {
                return ""
            }
            res = res.substring(0, res.length - 1)
        }
    }
    return res
};

console.log(longestCommonPrefix(["flower","flow","flight"]));