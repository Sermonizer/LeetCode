/*
 * @Author: your name
 * @Date: 2020-07-08 09:29:27
 * @LastEditTime: 2020-07-08 09:31:04
 * @LastEditors: Please set LastEditors
 * @Description: 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
                 k 是一个正整数，它的值小于或等于链表的长度。
                 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let temp = new ListNode(0), pre = temp, cur = head, next;
    temp.next = head;
    let len = 0;
    while(head !== null) {
        len++;
        head = head.next
    }
    head = temp.next
    for (let i = 0; i < Math.floor(len / k); i++) {
        for (let j = 0; j < k - 1; j++) {
            next = cur.next;
            cur.next = next.next;
            next.next = pre.next;
            pre.next = next
        }
        pre = cur;
        cur = pre.next;
    }
    return temp.next;
};
