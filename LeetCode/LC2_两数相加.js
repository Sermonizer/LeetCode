/*
 * @Author: your name
 * @Date: 2020-08-02 10:12:05
 * @LastEditTime: 2020-09-13 10:51:52
 * @LastEditors: Please set LastEditors
 * @Description: 给出两个 非空 的链表用来表示两个非负的整数。
 *               其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
                 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * @FilePath: \Algorithm\LeetCode\LC2_两数相加.js
 */ 

function ListNode(val) {
    this.val = val;
    this.next = null;
}
   
var addTwoNumbers = function(l1, l2) {
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
        l3.next = new ListNode(sum)
        l3 = l3.next
    }
    if (sub !== 0) {
        l3.next = new ListNode(sub)
        l3 = l3.next
    }
    return res.next
};