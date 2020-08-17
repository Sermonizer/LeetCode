/*
 * @Author: your name
 * @Date: 2020-08-17 11:33:56
 * @LastEditTime: 2020-08-17 11:40:25
 * @LastEditors: Please set LastEditors
 * @Description: 在一个按照东西和南北方向划分成规整街区的城市里，n个居民点散乱地分布在不同的街区中。
 *               用x 坐标表示东西向，用y坐标表示南北向。各居民点的位置可以由坐标(x,y)表示。
 *               街区中任意2 点(x1,y1)和(x2,y2)之间的距离可以用数值|x1-x2|+|y1-y2|度量。
                 居民们希望在城市中选择建立邮局的最佳位置，使n个居民点到邮局的距离总和最小。
 * @FilePath: \LeetCode\基本算法\邮局选址问题.js
 */
let x = [1,2,1,3,3]
let y = [2,2,3,-2,3]
x.sort((a, b) => a - b)
y.sort((a, b) => a - b)

let len = x.length - 1, resx = 0, resy = 0
for (let i = 0; i < Math.floor(len / 2) + 1; i++) {
    resx += (x[len - i] - x[i])
    resy += (y[len - i] - y[i])
}
console.log(resx + resy);