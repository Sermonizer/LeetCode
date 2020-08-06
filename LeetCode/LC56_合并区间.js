/*
 * @Author: your name
 * @Date: 2020-07-20 09:25:12
 * @LastEditTime: 2020-08-06 09:26:14
 * @LastEditors: Please set LastEditors
 * @Description: 给出一个区间的集合，请合并所有重叠的区间。
 * @FilePath: \Algorithm\LC56_合并区间.js
 */

var merge1 = function (intervals) {
    let res = [], index = -1
    intervals.sort((a1, a2) => {return a1[0] - a2[0]})
    for (let arr of intervals) {
        // console.log(arr);
        if (index == -1 || arr[0] > res[index][1]) {
            res[++index] = arr
        } else {
            res[index][1] = Math.max(res[index][1], arr[1])
        }
    }
    return res
};

/**
 * 1. 排序
 * 2. 额外空间暂存合并结果
 * @param {*} intervals 
 */
var merge2 = function(intervals) {
    if (intervals.length <= 1) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    let res = [], temp = [], max = intervals[0][1], min = intervals[0][0]
    for (let i = 0; i < intervals.length; i++) {
        if (i == 0) {
            temp = intervals[i]
            continue
        }
        if (intervals[i][0] > max) {
            res.push([...temp])
            temp = intervals[i]
            min = intervals[i][0]
            max = intervals[i][1]
        } else {
            max = intervals[i][1] > max ? intervals[i][1] : max
            temp = [min, max]
        }
    }
    if (temp.length !== 0) {
        res.push(temp)
    }
    return res
};

merge2([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]);
