/*
 * @Author: your name
 * @Date: 2020-09-17 15:39:15
 * @LastEditTime: 2020-09-17 15:53:36
 * @LastEditors: Please set LastEditors
 * @Description: 首先,让小朋友们围成一个大圈。然后,他随机指定一个数m,让编号为0的小朋友开始报数。
 *               每次喊到m-1的那个小朋友要出列唱首歌,然后可以在礼品箱中任意的挑选礼物,并且不再回到圈中,
 *               从他的下一个小朋友开始,继续0...m-1报数....
 *               直到剩下最后一个小朋友,请你试着想下,哪个小朋友会得到这份礼品呢？(注：小朋友的编号是从0到n-1)
 * @FilePath: \LeetCode\剑指Offer\孩子们的游戏.js
 */
function LastRemaining_Solution(n, m) {
    // write code here
    if (m == 0) return -1
    let child = new Array(n), sing = 0
    for (let i = 0; i < n; i++) {
        child[i] = i
    }
    while (n !== 1) {
        let del = (sing + m - 1) % n
        child.splice(del, 1)
        n--
        sing = del
    }
    return child[0]
}

console.log(LastRemaining_Solution(5, 2));