/*
 * @Author: your name
 * @Date: 2020-08-29 11:21:56
 * @LastEditTime: 2020-08-29 11:22:34
 * @LastEditors: Please set LastEditors
 * @Description: 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
                 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换
 * @FilePath: \LeetCode\LeetCode\递归\LC24_两两交换链表节点.js
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let next = new ListNode();
  next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};
