/*
 * @Author: your name
 * @Date: 2020-07-30 09:52:42
 * @LastEditTime: 2020-07-30 10:37:40
 * @LastEditors: Please set LastEditors
 * @Description: 如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0
 * @FilePath: \Algorithm\LeetCode\LC165_比较版本号.js
 */

var compareVersion = function (version1, version2) {
  let v1 = version1.split("."),
    v2 = version2.split("."),
    len1 = v1.length,
    len2 = v2.length,
        start = 0;
    let maxLen = len1 > len2 ? len1 : len2
  if (len1 > len2) {
    for (let i = 0; i < len1 - len2; i++) {
      v2.push(0);
    }
  }
  if (len2 > len1) {
    for (let i = 0; i < len2 - len1; i++) {
      v1.push(0);
    }
  }
  while (maxLen--) {
    if (v1[start].length > 1 && v1[start][0] === "0") {
      for (let i = 0, len = v1[start].length; i < len; i++) {
        if (v1[start][i] !== "0") {
          v1[start] = v1[start].slice(i);
        }
      }
    }
    if (v2[start].length > 1 && v2[start][0] === "0") {
      for (let i = 0, len = v2[start].length; i < len; i++) {
        if (v2[start][i] !== "0") {
            v2[start] = v2[start].slice(i);
            break
        }
      }
    }
    if (parseInt(v1[start]) > parseInt(v2[start])) {
      return 1;
    } else if (parseInt(v1[start]) < parseInt(v2[start])) {
      return -1;
    } else {
      start++;
    }
  }
  return 0;
};

console.log(parseInt("01"));
