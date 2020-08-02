/*
 * @Author: your name
 * @Date: 2020-08-02 10:12:05
 * @LastEditTime: 2020-08-02 10:31:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LeetCode\LC2_两数相加.js
 */ 

function ListNode(val) {
    this.val = val;
    this.next = null;
}
   
var addTwoNumbers = function (l1, l2) {
    let res = new ListNode(0), sub = 0, l3 = res
    while (l1 || l2) {
        let sum = sub
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        sub = Math.floor(sum / 10)
        sum %= 10
        l3.val = new ListNode(sum)
        l3 = l3.next
    }
    return res.next
};