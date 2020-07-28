/*
 * @Author: your name
 * @Date: 2020-07-09 15:59:33
 * @LastEditTime: 2020-07-28 17:34:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\排序\quickSort.js
 */

//  实现1：缺点：不是原地排序，返回的是新的数组
function quickSort1(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr.splice(Math.floor(arr.length / 2), 1)[0],
    left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort1(left).concat([pivot], quickSort1(right));
}

// 实现2
function quickSort2(arr, left, right) {
  let i = left,
    j = right,
    pivot = arr[Math.floor((left + right) / 2)];
  while (i <= j) {
    while (pivot > arr[i]) {
      i++;
    }
    while (pivot < arr[j]) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  if (left < j) {
    quickSort2(arr, left, j);
  }

  if (i < right) {
    quickSort2(arr, i, right);
  }
  return arr;
}

// 原地排序 in-place
// 基准的取值规则是取最左边的元素，我们会发现，小于基准的元素会紧挨在基准的右边，大于基准的元素会被移到后面，然后交换基准和小于基准的最后一个元素，
// 此时，基准处于正确的位置，即前面的元素都小于基准值，后面的元素都大于基准值。然后再对前面的和后面的多个元素取基准，做排序。
function quickSortArr(arr) {
  function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  function partition(arr, left, right) {
    let pivot = arr[left], beginIndex = left
    for (let i = left + 1; i <= right; i++) {
      if (arr[i] < pivot) {
        swap(arr, ++beginIndex, i)
      }
    }
    swap(arr, left, beginIndex)
    return beginIndex
  }

  function sort(arr, left, right) {
    if (left < right) {
      let beginIndex = partition(arr, left, right)
      sort(arr, left, beginIndex - 1)
      sort(arr, beginIndex + 1, right)
    }
  }

  sort(arr, 0, arr.length - 1)
  return arr
}



console.log(quickSortArr([12, 4, 23, 53, 27, 85, 34, 36, 72]));
