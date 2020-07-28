/*
 * @Author: your name
 * @Date: 2020-06-18 09:11:21
 * @LastEditTime: 2020-06-29 09:27:39
 * @LastEditors: Please set LastEditors
 * @Description:  两个字符串的数 如何相加？
 * @FilePath: \Algorithm\大数相加.js
 */

function bigNumberAdd(str1, str2) {
  /**
   * 1 字符串长度有可能不同 因此需要字符串反转
   * 2 相加要考虑进位问题
   * 3 字符串转换为ASCII码 0的ASCII码为48 因此要记得减去48
   */
  let num,
    current,
    nextAdd = 0,
    result = [];
  let minLen = Math.min(str1.length, str2.length);
  str1 = [...str1].reverse().join("");
  str2 = [...str2].reverse().join("");

  for (let i = 0; i < minLen; i++) {
    num =
      str1.charCodeAt(i) + str2.charCodeAt(i) - 2 * "0".charCodeAt() + nextAdd;
    current = num % 10;
    nextAdd = Math.floor(num / 10);
    result.push(current);
  }

  let str = str1.length > str2.length ? str1 : str2;
  for (let i = minLen; i < str.length; i++) {
    num = str.charCodeAt(i) - "0".charCodeAt() + nextAdd;
    current = num % 10;
    nextAdd = Math.floor(num / 10);
    result.push(current);
  }
  if (nextAdd !== 0) result.push(nextAdd);

  return [...result].reverse().join("");
}

console.log(bigNumberAdd("9999999999", "321311"));

// let str = 'abcadsd'
// console.log([...str].reverse().join(''));
