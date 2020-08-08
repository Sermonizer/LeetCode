/*
 * @Author: your name
 * @Date: 2020-08-08 20:57:27
 * @LastEditTime: 2020-08-08 21:03:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\LeetCode\LC204_计算质数.js
 */

 /**
  * 比如说求20以内质数的个数,首先0,1不是质数.2是第一个质数,
  * 然后把20以内所有2的倍数划去.2后面紧跟的数即为下一个质数3,
  * 然后把3所有的倍数划去.3后面紧跟的数即为下一个质数5,再把5所有的倍数划去.以此类推.
  */
var countPrimes = function(n) {
    let res = new Array(n).fill(1), sum = 0
    res[0] = 0, res[1] = 0
    for (let i = 2; i < n; i++) {
        if (res[i] == 1) {
            for (let j = 2; j * i < n; j++) {
                res[j * i] = 0
            }
            sum += 1
        }
    }
    return sum
};

console.log(countPrimes(10));