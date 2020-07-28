/*
 * @Author: your name
 * @Date: 2020-07-20 09:25:12
 * @LastEditTime: 2020-07-20 13:18:43
 * @LastEditors: Please set LastEditors
 * @Description: 给出一个区间的集合，请合并所有重叠的区间。
 * @FilePath: \Algorithm\LC56_合并区间.js
 */

var merge = function (intervals) {
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

merge([[1,2],[3,4],[5,6]]);
