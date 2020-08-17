/*
 * @Author: your name
 * @Date: 2020-07-28 17:02:25
 * @LastEditTime: 2020-07-28 17:05:43
 * @LastEditors: Please set LastEditors
 * @Description: 插排
 * @FilePath: \Algorithm\排序\insertSort.js
 */

 function insertSort(array) {
     for (let i = 1, len = array.length; i < len; i++) {
         for (let j = 0; j < i; j++) {
             if (array[i] < array[j]) {
                 let temp = array[j]
                 array[j] = array[i]
                 array[i] = temp
             }
         }
     }
     return array
}
 
let arr = [6, 5, 4, 3, 2, 1]
console.log(insertSort(arr));
