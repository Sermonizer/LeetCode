/*
 * @Author: your name
 * @Date: 2020-08-04 11:24:23
 * @LastEditTime: 2020-08-04 11:40:13
 * @LastEditors: Please set LastEditors
 * @Description: 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @FilePath: \Algorithm\LeetCode\LC21_合并两个有序链表.js
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 迭代法
var mergeTwoLists = function (l1, l2) {
  let res = new ListNode(0),
    tmp = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tmp.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      tmp.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    tmp = tmp.next;
  }
  if (l1) {
    tmp.next = l1;
  }
  if (l2) {
    tmp.next = l2;
  }
  return res.next;
};

// 递归法
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

let a1 = new ListNode(1);
let a2 = new ListNode(2);
let a3 = new ListNode(4);
let a4 = new ListNode(1);
let a5 = new ListNode(3);
let a6 = new ListNode(6);

a1.next = a2;
a2.next = a3;

a4.next = a5;
a5.next = a6;

console.log(mergeTwoLists(a1, a4));
