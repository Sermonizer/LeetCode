/*
 * @Author: your name
 * @Date: 2020-06-11 09:24:37
 * @LastEditTime: 2020-06-11 09:41:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XiechengH5\test.js
 */
function cutRope(number) {
    // write code here
    if (number === 2) {
        return 1;
    }
    else if (number === 3) {
        return 2;
    }
    if (number % 3 === 0) {
        return Math.pow(3, (number / 3));
    }
    else if (number % 3 === 1) {
        return (4 * Math.pow(3, Math.floor(number / 3) - 1));
    }
    else {
        return (2 * Math.pow(3, Math.floor(number / 3)));
    }
}

function cutRope2(n) {
    let max = 1;
    if (n <= 3) return n - 1;
    while (n > 4) {
        n -= 3;
        max *= 3;
    }
    return n * max;
}

let num = cutRope2(7);
console.log(num);
