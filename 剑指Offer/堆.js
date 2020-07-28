/*
 * @Author: your name
 * @Date: 2020-07-02 10:59:26
 * @LastEditTime: 2020-07-02 11:03:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\堆.js
 */ 

 /**
  * 
  * @param {*} arr 
  * @param {*} i 
  * @param {*} j
  * 建立最大堆 
  */
 
function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function headify(arr, n, i) {
    if (i >= n) return 
    let c1 = 2 * i + 1, c2 = 2 * i + 2, min = i
    if (c1 < n && arr[c1] > arr[min]) {
        min = c1
    }
    if (c2 < n && arr[c2] > arr[min]) {
        min = c2
    }
    if (min != i) {
        swap(arr, min, i)
        headify(arr, n, min)
    }
}

// 如何从最底部开始建堆？
/**
 * 1. 找到最后一个节点的父节点，然后i--
 * 2. 从这个节点开始headify
 */

let arr = [4, 10, 3, 5, 1, 2]
headify(arr, arr.length, 0)
for (let i = 0; i < arr.length; i++) {
    console.log((arr[i]));
    
}