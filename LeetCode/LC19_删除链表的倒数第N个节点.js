/*
 * @Author: your name
 * @Date: 2020-08-07 10:47:03
 * @LastEditTime: 2020-08-07 11:22:08
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * @FilePath: \LeetCode\LeetCode\LC19_删除链表的倒数第N个节点.js
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 两次遍历
var removeNthFromEnd1 = function(head, n) {
    let len = 0, temp = new ListNode(0), first = head
    temp.next = head
    while (first) {
        len++
        first = first.next
    }
    first = temp, len -= n
    while (len > 0) {
        len--
        first = first.next
    }
    first.next = first.next.next
    return temp.next
};

// 快慢指针
var removeNthFromEnd2 = function(head, n) {
    let temp = new ListNode(0), fast = temp, slow = temp
    temp.next = head
    for(let i = 1; i <= n + 1; i++) {
        fast = fast.next
    }
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return temp.next
};

// 递归

let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(5)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5

console.log(removeNthFromEnd(a1, 2));