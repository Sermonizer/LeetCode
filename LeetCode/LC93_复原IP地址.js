/*
 * @Author: your name
 * @Date: 2020-07-01 11:04:11
 * @LastEditTime: 2020-08-07 14:05:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LC93_复原IP地址.js
 */ 

// 回溯+DFS
var restoreIpAddresses = function(s) {
    const res = [], temp = []
    dfs(s, 0, temp)
    return res

    function dfs(s, start, segment) {
        if (start == s.length) {
            if (segment.length == 4) {
                let sb = ""
                for (let i = 0; i < 4; i++) {
                    sb = sb + segment[i]
                    if (i !== 3) {
                        sb += "."
                    }
                }
                res.push(sb)
            }
            return 
        } else {
            if (segment.length > 4) return
            // 判断IP地址
            for (let i = start; i < s.length && i < start + 3; i++) {
                let str = s.substring(start, i + 1)
                if (str[0] == "0" && str.length > 1) break
                let num = +str
                if (num >= 0 && num <= 255) {
                    segment.push(num)
                    dfs(s, i+1, segment)
                    segment.pop()
                } else {
                    break
                }
            }
        }
    }
};

console.log(restoreIpAddresses("25525511135"));